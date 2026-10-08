import * as THREE from "three";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

const CONFIG = {
  mapImagePaths: [
    "../stadium_hoki_nasional_maps/google_satellite_z20.png",
    "./assets/google_satellite_z20.png"
  ],
  geoJsonPaths: [
    "../stadium_hoki_nasional_maps/osm_plan_vectors.geojson",
    "./assets/osm_plan_vectors.geojson"
  ],
  floorPlanPath: "./assets/nhs_plan_crop.png",
  bbox: {
    latMin: 3.0571946999999997,
    latMax: 3.0607112,
    lonMin: 101.6918794,
    lonMax: 101.6957262
  },
  mapPixelSize: 3072,
  modules: {
    main: {
      centerPixel: { x: 1379.18, y: 1498.77 },
      angleDeg: 82.28
    },
    secondary: {
      centerPixel: { x: 2332.41, y: 1562.35 },
      angleDeg: 87.68
    }
  }
};

const STYLE_PRESETS = {
  realistic: {
    background: "#9ec9eb",
    showSatellite: true,
    showEdges: false,
    showPlanOverlay: false,
    planOpacity: 0.0,
    colors: {
      roads: "#737373",
      building: "#dfe4ea",
      roofBuilding: "#c8ced6",
      field: "#0a3ea8",
      stand: "#d8dde0",
      standAccent: "#b7bfc8",
      roof: "#2f3a44",
      column: "#505b65",
      apron: "#b9c1ca",
      facade: "#d4d9de",
      edge: "#384757",
      track: "#a24340",
      fence: "#94a0aa",
      foliage: "#4f7f4a",
      trunk: "#766255",
      marker: "#2d75de"
    }
  },
  clean: {
    background: "#e6f1fa",
    showSatellite: false,
    showEdges: true,
    showPlanOverlay: true,
    planOpacity: 0.44,
    colors: {
      roads: "#97a5b5",
      building: "#ffffff",
      roofBuilding: "#d8dfe7",
      field: "#2b6ed8",
      stand: "#f3f6f8",
      standAccent: "#d7dde3",
      roof: "#6f7b87",
      column: "#8a97a2",
      apron: "#d4dbe2",
      facade: "#f2f3f5",
      edge: "#5b6774",
      track: "#b65f5b",
      fence: "#8f9aa4",
      foliage: "#5d8c57",
      trunk: "#7e6a5e",
      marker: "#3b82f6"
    }
  }
};

const materialRegistry = {
  ground: [],
  roads: [],
  building: [],
  roofBuilding: [],
  field: [],
  stand: [],
  standAccent: [],
  roof: [],
  column: [],
  apron: [],
  facade: [],
  edge: [],
  track: [],
  fence: [],
  foliage: [],
  trunk: [],
  marker: []
};

const state = {
  styleName: "realistic",
  textures: {
    satellite: null,
    floorPlan: null,
    fieldLines: null
  },
  edgeObjects: [],
  planOverlays: [],
  labelSprites: [],
  domAnnotations: [],
  centers: {
    main: null,
    secondary: null
  },
  cameraTween: null,
  tour: {
    running: false,
    step: 0,
    timer: null
  },
  shared: {
    trunkMat: null,
    foliageMat: null
  }
};

const statusElement = document.getElementById("status");
const loadingScreenElement = document.getElementById("loading-screen");
const annotationContainer = document.getElementById("annotation-container");
const appElement = document.getElementById("app");
const scene = new THREE.Scene();
const canvas = document.getElementById("scene");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: "high-performance"
});

renderer.setPixelRatio(getAdaptivePixelRatio());
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 5000);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 85;
controls.maxDistance = 1200;
controls.maxPolarAngle = Math.PI * 0.49;
controls.target.set(0, 10, 0);
controls.addEventListener("start", () => {
  if (!state.tour.running) return;
  stopTour();
  const tourBtn = document.getElementById("view-tour");
  if (tourBtn) tourBtn.textContent = "Start Tour";
});

const root = new THREE.Group();
scene.add(root);
scene.fog = new THREE.Fog(0xaed0ea, 460, 1300);

const mapMetrics = buildMapMetrics(CONFIG.bbox);

function getAdaptivePixelRatio() {
  const base = window.devicePixelRatio || 1;
  const mobile = window.innerWidth <= 900;
  return Math.min(mobile ? 1.5 : 2, base);
}

function setStatus(text) {
  statusElement.textContent = text;
  statusElement.style.display = "block";
}

function hideStatus() {
  statusElement.style.display = "none";
}

function hideLoadingScreen() {
  if (!loadingScreenElement) return;
  loadingScreenElement.classList.add("hidden");
  window.setTimeout(() => {
    if (loadingScreenElement && loadingScreenElement.parentElement) {
      loadingScreenElement.parentElement.removeChild(loadingScreenElement);
    }
  }, 420);
}

function buildMapMetrics(bbox) {
  const latMid = (bbox.latMin + bbox.latMax) * 0.5;
  const metersPerDegLat = 111320;
  const metersPerDegLon = 111320 * Math.cos((latMid * Math.PI) / 180);
  return {
    widthMeters: (bbox.lonMax - bbox.lonMin) * metersPerDegLon,
    depthMeters: (bbox.latMax - bbox.latMin) * metersPerDegLat
  };
}

function toWorldFromLonLat(lon, lat) {
  const lonSpan = CONFIG.bbox.lonMax - CONFIG.bbox.lonMin;
  const latSpan = CONFIG.bbox.latMax - CONFIG.bbox.latMin;
  const nx = (lon - CONFIG.bbox.lonMin) / lonSpan;
  const ny = (lat - CONFIG.bbox.latMin) / latSpan;
  return {
    x: (nx - 0.5) * mapMetrics.widthMeters,
    z: ((1 - ny) - 0.5) * mapMetrics.depthMeters
  };
}

function toWorldFromPixel(px, py) {
  const nx = px / CONFIG.mapPixelSize;
  const ny = py / CONFIG.mapPixelSize;
  return {
    x: (nx - 0.5) * mapMetrics.widthMeters,
    z: (ny - 0.5) * mapMetrics.depthMeters
  };
}

function addMaterial(role, material) {
  materialRegistry[role].push(material);
}

function addEdge(mesh, parent) {
  const edgeGeometry = new THREE.EdgesGeometry(mesh.geometry);
  const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x556373, transparent: true, opacity: 0.8 });
  const line = new THREE.LineSegments(edgeGeometry, edgeMaterial);
  line.position.copy(mesh.position);
  line.rotation.copy(mesh.rotation);
  line.scale.copy(mesh.scale);
  parent.add(line);
  state.edgeObjects.push(line);
  addMaterial("edge", edgeMaterial);
}

function createLabelSprite(text) {
  const labelCanvas = document.createElement("canvas");
  labelCanvas.width = 512;
  labelCanvas.height = 120;
  const ctx = labelCanvas.getContext("2d");
  ctx.clearRect(0, 0, labelCanvas.width, labelCanvas.height);
  ctx.fillStyle = "rgba(14, 22, 34, 0.82)";
  roundRect(ctx, 4, 18, 504, 84, 24);
  ctx.fill();
  ctx.strokeStyle = "rgba(210, 227, 248, 0.92)";
  ctx.lineWidth = 3;
  roundRect(ctx, 4, 18, 504, 84, 24);
  ctx.stroke();
  ctx.fillStyle = "#f1f7ff";
  ctx.font = "700 34px Segoe UI";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, labelCanvas.width / 2, 60);

  const texture = new THREE.CanvasTexture(labelCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  addMaterial("marker", material);
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(42, 10, 1);
  sprite.renderOrder = 20;
  state.labelSprites.push(sprite);
  return sprite;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function getModuleWorldPoint(moduleKey, localX, localZ, y = 2.2) {
  const moduleConfig = CONFIG.modules[moduleKey];
  const center = state.centers[moduleKey];
  if (!moduleConfig || !center) return null;
  const rot = THREE.MathUtils.degToRad(90 - moduleConfig.angleDeg);
  const sin = Math.sin(rot);
  const cos = Math.cos(rot);
  return new THREE.Vector3(
    center.x + localX * cos - localZ * sin,
    y,
    center.z + localX * sin + localZ * cos
  );
}

function buildAnnotationSpecs() {
  const specs = [
    {
      id: 1,
      title: "Main Stadium Gate Zone",
      text: "Primary staff and attendee entry axis for briefing use.",
      world: getModuleWorldPoint("main", 0, 64, 2.1),
      camera: { mode: "main", offset: new THREE.Vector3(0, 56, 124), targetY: 7 }
    },
    {
      id: 2,
      title: "Main Stadium Seating Bowl",
      text: "Primary bowl and roof structure for large-capacity operations.",
      world: getModuleWorldPoint("main", -32, -8, 8),
      camera: { mode: "main", offset: new THREE.Vector3(-102, 58, 84), targetY: 10 }
    },
    {
      id: 3,
      title: "Secondary Hockey Venue",
      text: "Secondary competition / support field for parallel activity.",
      world: getModuleWorldPoint("secondary", 0, 0, 2.2),
      camera: { mode: "secondary", offset: new THREE.Vector3(-85, 56, 102), targetY: 7 }
    },
    {
      id: 4,
      title: "Inter-Venue Access Corridor",
      text: "Key flow corridor between both stadium clusters.",
      world: state.centers.main && state.centers.secondary
        ? state.centers.main.clone().lerp(state.centers.secondary, 0.5).setY(3)
        : null,
      camera: { mode: "aerial", offset: new THREE.Vector3(-120, 102, 165), targetY: 6 }
    },
    {
      id: 5,
      title: "Outer Vehicle Ring",
      text: "Ring road and perimeter lanes for vehicle circulation.",
      world: getModuleWorldPoint("main", 78, -12, 2),
      camera: { mode: "aerial", offset: new THREE.Vector3(-95, 68, 110), targetY: 3 }
    }
  ];
  return specs.filter((item) => item.world);
}

function initDomAnnotations() {
  if (!annotationContainer) return;
  annotationContainer.innerHTML = "";
  state.domAnnotations = [];
  const specs = buildAnnotationSpecs();

  for (const spec of specs) {
    const marker = document.createElement("button");
    marker.className = "annotation-point";
    marker.type = "button";
    marker.textContent = String(spec.id);
    marker.title = spec.title;

    const card = document.createElement("div");
    card.className = "annotation-card";
    const title = document.createElement("div");
    title.className = "annotation-title";
    title.textContent = spec.title;
    const text = document.createElement("div");
    text.className = "annotation-text";
    text.textContent = spec.text;
    card.appendChild(title);
    card.appendChild(text);

    marker.addEventListener("click", () => {
      focusAnnotation(spec);
    });
    marker.addEventListener("mouseenter", () => card.classList.add("visible"));
    marker.addEventListener("mouseleave", () => card.classList.remove("visible"));

    annotationContainer.appendChild(marker);
    annotationContainer.appendChild(card);
    state.domAnnotations.push({
      spec,
      marker,
      card,
      visibleUntil: 0
    });
  }
}

function focusAnnotation(spec) {
  stopTour();
  const tourBtn = document.getElementById("view-tour");
  if (tourBtn) tourBtn.textContent = "Start Tour";

  const toTarget = spec.world.clone();
  if (spec.camera && spec.camera.targetY !== undefined) {
    toTarget.y = spec.camera.targetY;
  }
  const offset = spec.camera?.offset || new THREE.Vector3(-80, 58, 100);
  const toPos = toTarget.clone().add(offset);

  startCameraTween(
    {
      position: toPos,
      target: toTarget
    },
    1200
  );

  const active = state.domAnnotations.find((item) => item.spec.id === spec.id);
  if (active) {
    active.card.classList.add("visible");
    active.visibleUntil = performance.now() + 2600;
  }

  if (spec.camera?.mode) {
    setActiveViewButton(`view-${spec.camera.mode}`);
  } else {
    setActiveViewButton("view-aerial");
  }
}

function updateDomAnnotations(time) {
  if (!annotationContainer || state.domAnnotations.length === 0) return;
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (const item of state.domAnnotations) {
    const p = item.spec.world.clone();
    p.project(camera);

    const isVisible = p.z < 1 && p.z > -1 && p.x > -1.2 && p.x < 1.2 && p.y > -1.2 && p.y < 1.2;
    if (!isVisible) {
      item.marker.style.display = "none";
      item.card.style.display = "none";
      continue;
    }

    const x = (p.x * 0.5 + 0.5) * width;
    const y = (-p.y * 0.5 + 0.5) * height;
    item.marker.style.display = "flex";
    item.card.style.display = "block";
    item.marker.style.left = `${x}px`;
    item.marker.style.top = `${y}px`;
    item.card.style.left = `${x}px`;
    item.card.style.top = `${y - 6}px`;

    const shouldShow = item.card.classList.contains("visible") || time < item.visibleUntil;
    if (shouldShow) item.card.classList.add("visible");
    else item.card.classList.remove("visible");
  }
}

function startCameraTween(view, durationMs = 1200) {
  const fromPos = camera.position.clone();
  const fromTarget = controls.target.clone();
  state.cameraTween = {
    start: performance.now(),
    duration: durationMs,
    fromPos,
    fromTarget,
    toPos: view.position.clone(),
    toTarget: view.target.clone()
  };
}

function updateCameraTween(time) {
  if (!state.cameraTween) return;
  const t = (time - state.cameraTween.start) / state.cameraTween.duration;
  if (t >= 1) {
    camera.position.copy(state.cameraTween.toPos);
    controls.target.copy(state.cameraTween.toTarget);
    controls.update();
    state.cameraTween = null;
    return;
  }
  const eased = 1 - Math.pow(1 - Math.max(0, t), 3);
  camera.position.lerpVectors(state.cameraTween.fromPos, state.cameraTween.toPos, eased);
  controls.target.lerpVectors(state.cameraTween.fromTarget, state.cameraTween.toTarget, eased);
}

function getViewPreset(name) {
  const main = state.centers.main || new THREE.Vector3();
  const secondary = state.centers.secondary || new THREE.Vector3();
  const combined = new THREE.Vector3().copy(main).lerp(secondary, 0.5);
  if (name === "main") {
    return {
      position: new THREE.Vector3(main.x - 85, 72, main.z + 110),
      target: new THREE.Vector3(main.x, 8.5, main.z)
    };
  }
  if (name === "secondary") {
    return {
      position: new THREE.Vector3(secondary.x - 75, 66, secondary.z + 92),
      target: new THREE.Vector3(secondary.x, 7.5, secondary.z)
    };
  }
  return {
    position: new THREE.Vector3(combined.x - 165, 235, combined.z + 300),
    target: new THREE.Vector3(combined.x, 10, combined.z)
  };
}

function setActiveViewButton(activeId) {
  for (const id of ["view-aerial", "view-main", "view-secondary"]) {
    const button = document.getElementById(id);
    if (!button) continue;
    if (id === activeId) button.classList.add("active");
    else button.classList.remove("active");
  }
}

function startTour() {
  stopTour();
  state.tour.running = true;
  state.tour.step = 0;
  const views = ["aerial", "main", "secondary", "aerial"];
  const runStep = () => {
    if (!state.tour.running) return;
    const viewName = views[state.tour.step % views.length];
    setActiveViewButton(`view-${viewName}`);
    startCameraTween(getViewPreset(viewName), 1500);
    state.tour.step += 1;
    state.tour.timer = window.setTimeout(runStep, 4200);
  };
  runStep();
}

function stopTour() {
  state.tour.running = false;
  if (state.tour.timer) {
    clearTimeout(state.tour.timer);
    state.tour.timer = null;
  }
}

function createFieldTexture() {
  const canvasTex = document.createElement("canvas");
  canvasTex.width = 1024;
  canvasTex.height = 620;
  const ctx = canvasTex.getContext("2d");

  ctx.fillStyle = "#0a3ea8";
  ctx.fillRect(0, 0, canvasTex.width, canvasTex.height);

  ctx.strokeStyle = "rgba(255,255,255,0.95)";
  ctx.lineWidth = 6;
  const padX = 40;
  const padY = 40;
  const w = canvasTex.width - 2 * padX;
  const h = canvasTex.height - 2 * padY;
  ctx.strokeRect(padX, padY, w, h);

  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(canvasTex.width * 0.5, padY);
  ctx.lineTo(canvasTex.width * 0.5, padY + h);
  ctx.stroke();

  const shootWidth = h * 0.73;
  const shootY = (canvasTex.height - shootWidth) * 0.5;
  const shootDepth = w * 0.165;
  ctx.strokeRect(padX, shootY, shootDepth, shootWidth);
  ctx.strokeRect(padX + w - shootDepth, shootY, shootDepth, shootWidth);

  const circleR = h * 0.23;
  ctx.beginPath();
  ctx.arc(padX + shootDepth, canvasTex.height * 0.5, circleR, -Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(padX + w - shootDepth, canvasTex.height * 0.5, circleR, Math.PI / 2, (3 * Math.PI) / 2);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvasTex);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function createRoundedRectShape(width, depth, radius) {
  const hw = width * 0.5;
  const hd = depth * 0.5;
  const r = Math.min(radius, hw - 0.001, hd - 0.001);
  const shape = new THREE.Shape();
  shape.moveTo(-hw + r, -hd);
  shape.lineTo(hw - r, -hd);
  shape.absarc(hw - r, -hd + r, r, -Math.PI / 2, 0, false);
  shape.lineTo(hw, hd - r);
  shape.absarc(hw - r, hd - r, r, 0, Math.PI / 2, false);
  shape.lineTo(-hw + r, hd);
  shape.absarc(-hw + r, hd - r, r, Math.PI / 2, Math.PI, false);
  shape.lineTo(-hw, -hd + r);
  shape.absarc(-hw + r, -hd + r, r, Math.PI, (3 * Math.PI) / 2, false);
  shape.closePath();
  return shape;
}

function createRingGeometry(outer, inner, height, curveSegments = 24) {
  const shape = createRoundedRectShape(outer.width, outer.depth, outer.radius);
  const holeShape = createRoundedRectShape(inner.width, inner.depth, inner.radius);
  const holePoints = holeShape.getPoints().reverse();
  const holePath = new THREE.Path(holePoints);
  shape.holes.push(holePath);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: height,
    bevelEnabled: false,
    curveSegments
  });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

function sampleRoundedRectPoints(width, depth, radius, sampleCount) {
  const shape = createRoundedRectShape(width, depth, radius);
  const points = shape.getSpacedPoints(sampleCount);
  return points.map((p) => new THREE.Vector3(p.x, 0, p.y));
}

function createRoadLine(points, material) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geometry, material);
}

function makeBox(width, height, depth, material) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createTree(x, z, scale = 1) {
  if (!state.shared.trunkMat) {
    state.shared.trunkMat = new THREE.MeshStandardMaterial({ color: 0x766255, roughness: 0.95, metalness: 0.01 });
    addMaterial("trunk", state.shared.trunkMat);
  }
  if (!state.shared.foliageMat) {
    state.shared.foliageMat = new THREE.MeshStandardMaterial({ color: 0x4f7f4a, roughness: 0.92, metalness: 0.01 });
    addMaterial("foliage", state.shared.foliageMat);
  }
  const trunkMat = state.shared.trunkMat;
  const foliageMat = state.shared.foliageMat;

  const group = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32 * scale, 0.42 * scale, 4.2 * scale, 8), trunkMat);
  trunk.position.y = 2.1 * scale;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  group.add(trunk);

  const crownA = new THREE.Mesh(new THREE.IcosahedronGeometry(2.3 * scale, 1), foliageMat);
  crownA.position.y = 5.6 * scale;
  crownA.castShadow = true;
  crownA.receiveShadow = true;
  group.add(crownA);

  const crownB = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6 * scale, 0), foliageMat);
  crownB.position.set(0.9 * scale, 4.9 * scale, -0.7 * scale);
  crownB.castShadow = true;
  crownB.receiveShadow = true;
  group.add(crownB);

  group.position.set(x, 0, z);
  root.add(group);
}

function addVenueMarkers() {
  const main = state.centers.main;
  const secondary = state.centers.secondary;
  if (!main || !secondary) return;

  const mainLabel = createLabelSprite("National Hockey Stadium");
  mainLabel.position.set(main.x, 25, main.z - 2);
  root.add(mainLabel);

  const secondaryLabel = createLabelSprite("Stadium Hoki 2");
  secondaryLabel.position.set(secondary.x, 20, secondary.z - 2);
  root.add(secondaryLabel);

  const accessLabel = createLabelSprite("Primary Access / Briefing Axis");
  const center = main.clone().lerp(secondary, 0.5);
  accessLabel.position.set(center.x - 65, 15, center.z - 86);
  root.add(accessLabel);
}

function addPerimeterObjects() {
  const main = state.centers.main;
  if (!main) return;

  const fenceMat = new THREE.MeshStandardMaterial({ color: 0x94a0aa, roughness: 0.8, metalness: 0.2 });
  addMaterial("fence", fenceMat);

  const fenceGroup = new THREE.Group();
  fenceGroup.position.copy(main);
  fenceGroup.rotation.y = THREE.MathUtils.degToRad(90 - CONFIG.modules.main.angleDeg);
  root.add(fenceGroup);

  const segments = [
    { x: 0, z: -61, w: 128, d: 0.7 },
    { x: 0, z: 61, w: 128, d: 0.7 },
    { x: -69, z: 0, w: 0.7, d: 118 },
    { x: 69, z: 0, w: 0.7, d: 118 }
  ];

  for (const seg of segments) {
    const fence = makeBox(seg.w, 1.4, seg.d, fenceMat);
    fence.position.set(seg.x, 1.2, seg.z);
    fenceGroup.add(fence);
  }

  const poleMat = new THREE.MeshStandardMaterial({ color: 0x5f6a74, roughness: 0.72, metalness: 0.25 });
  addMaterial("column", poleMat);
  for (let i = -4; i <= 4; i += 1) {
    const x = i * 16;
    for (const z of [-58, 58]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 18, 10), poleMat);
      pole.position.set(x, 9.2, z);
      pole.castShadow = true;
      fenceGroup.add(pole);
      const head = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.5, 1.1), poleMat);
      head.position.set(x, 18.8, z);
      head.castShadow = true;
      fenceGroup.add(head);
    }
  }
}

function addTreeLandscape() {
  const main = state.centers.main || new THREE.Vector3();
  const secondary = state.centers.secondary || new THREE.Vector3();
  const center = main.clone().lerp(secondary, 0.5);
  const rng = mulberry32(6540654);

  for (let i = 0; i < 230; i += 1) {
    const x = center.x + (rng() - 0.5) * 760;
    const z = center.z + (rng() - 0.5) * 540;
    const nearMain = Math.hypot(x - main.x, z - main.z) < 95;
    const nearSecondary = Math.hypot(x - secondary.x, z - secondary.z) < 85;
    if (nearMain || nearSecondary) continue;
    const scale = 0.85 + rng() * 0.75;
    createTree(x, z, scale);
  }
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function next() {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function createMainStadium() {
  const center = toWorldFromPixel(CONFIG.modules.main.centerPixel.x, CONFIG.modules.main.centerPixel.y);
  state.centers.main = new THREE.Vector3(center.x, 0, center.z);
  const rotationY = THREE.MathUtils.degToRad(90 - CONFIG.modules.main.angleDeg);
  const group = new THREE.Group();
  group.position.set(center.x, 0, center.z);
  group.rotation.y = rotationY;
  root.add(group);

  const apronMat = new THREE.MeshStandardMaterial({ color: 0xb9c1ca, roughness: 0.92, metalness: 0.02 });
  const standMat = new THREE.MeshStandardMaterial({ color: 0xd8dde0, roughness: 0.9, metalness: 0.02 });
  const standAccentMat = new THREE.MeshStandardMaterial({ color: 0xb7bfc8, roughness: 0.88, metalness: 0.03 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x2f3a44, roughness: 0.66, metalness: 0.16 });
  const columnMat = new THREE.MeshStandardMaterial({ color: 0x505b65, roughness: 0.75, metalness: 0.16 });
  const facadeMat = new THREE.MeshStandardMaterial({ color: 0xd4d9de, roughness: 0.95, metalness: 0.01 });
  const trackMat = new THREE.MeshStandardMaterial({ color: 0xa24340, roughness: 0.9, metalness: 0.02 });

  [apronMat].forEach((m) => addMaterial("apron", m));
  [standMat].forEach((m) => addMaterial("stand", m));
  [standAccentMat].forEach((m) => addMaterial("standAccent", m));
  [roofMat].forEach((m) => addMaterial("roof", m));
  [columnMat].forEach((m) => addMaterial("column", m));
  [facadeMat].forEach((m) => addMaterial("facade", m));
  [trackMat].forEach((m) => addMaterial("track", m));

  const basePodium = makeBox(136, 1.4, 118, apronMat);
  basePodium.position.y = 0.7;
  group.add(basePodium);
  addEdge(basePodium, group);

  const ringDefs = [
    {
      y: 1.4,
      h: 2.5,
      outer: { width: 128, depth: 110, radius: 28 },
      inner: { width: 106, depth: 88, radius: 19 },
      material: standAccentMat
    },
    {
      y: 3.9,
      h: 2.3,
      outer: { width: 120, depth: 102, radius: 26 },
      inner: { width: 102, depth: 84, radius: 17 },
      material: standMat
    },
    {
      y: 6.2,
      h: 2.1,
      outer: { width: 112, depth: 94, radius: 23 },
      inner: { width: 98, depth: 80, radius: 15 },
      material: standMat
    }
  ];

  for (const ring of ringDefs) {
    const geom = createRingGeometry(ring.outer, ring.inner, ring.h, 28);
    const mesh = new THREE.Mesh(geom, ring.material);
    mesh.position.y = ring.y;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    addEdge(mesh, group);
  }

  const innerWallGeom = createRingGeometry(
    { width: 96, depth: 78, radius: 14 },
    { width: 92, depth: 74, radius: 12 },
    2.8,
    18
  );
  const innerWall = new THREE.Mesh(innerWallGeom, facadeMat);
  innerWall.position.y = 1.0;
  group.add(innerWall);

  const fieldBase = makeBox(55.5, 0.6, 92.0, apronMat);
  fieldBase.position.y = 0.35;
  group.add(fieldBase);

  const trackGeom = createRingGeometry(
    { width: 64.5, depth: 100.5, radius: 9.2 },
    { width: 56.5, depth: 92.5, radius: 6.6 },
    0.16,
    22
  );
  const track = new THREE.Mesh(trackGeom, trackMat);
  track.position.y = 0.58;
  track.receiveShadow = true;
  group.add(track);

  const fieldMat = new THREE.MeshStandardMaterial({
    color: 0x0a3ea8,
    map: state.textures.fieldLines,
    roughness: 0.86,
    metalness: 0.03
  });
  addMaterial("field", fieldMat);

  const field = new THREE.Mesh(new THREE.PlaneGeometry(55, 91.4), fieldMat);
  field.rotation.x = -Math.PI / 2;
  field.position.y = 0.72;
  field.receiveShadow = true;
  group.add(field);

  const roofRingGeom = createRingGeometry(
    { width: 140, depth: 122, radius: 31 },
    { width: 111, depth: 93, radius: 20 },
    1.2,
    32
  );
  const roofRing = new THREE.Mesh(roofRingGeom, roofMat);
  roofRing.position.y = 13.4;
  roofRing.castShadow = true;
  roofRing.receiveShadow = true;
  group.add(roofRing);
  addEdge(roofRing, group);

  const lowerCanopyGeom = createRingGeometry(
    { width: 132, depth: 114, radius: 29 },
    { width: 117, depth: 99, radius: 22 },
    0.8,
    28
  );
  const lowerCanopy = new THREE.Mesh(lowerCanopyGeom, roofMat);
  lowerCanopy.position.y = 11.8;
  group.add(lowerCanopy);

  const facadeRingGeom = createRingGeometry(
    { width: 130, depth: 112, radius: 28 },
    { width: 124, depth: 106, radius: 26 },
    7.4,
    22
  );
  const facadeRing = new THREE.Mesh(facadeRingGeom, facadeMat);
  facadeRing.position.y = 0.4;
  group.add(facadeRing);

  const supportPoints = sampleRoundedRectPoints(131, 113, 28.5, 70);
  for (let i = 0; i < supportPoints.length; i += 2) {
    const p = supportPoints[i];
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 10.8, 10), columnMat);
    column.position.set(p.x, 5.4, p.z);
    column.castShadow = true;
    column.receiveShadow = true;
    group.add(column);
  }

  for (let i = 0; i < supportPoints.length; i += 4) {
    const p = supportPoints[i];
    const dir = new THREE.Vector3(-p.x, 0, -p.z).normalize();
    const length = Math.max(8, Math.sqrt(p.x * p.x + p.z * p.z) - 58);
    const beam = makeBox(0.45, 0.5, length, columnMat);
    beam.position.set(p.x + dir.x * (length * 0.45), 10.7, p.z + dir.z * (length * 0.45));
    beam.rotation.y = Math.atan2(dir.x, dir.z);
    group.add(beam);
  }

  for (let i = -4; i <= 4; i += 1) {
    const rail = makeBox(0.35, 0.8, 92, facadeMat);
    rail.position.set(i * 11.6, 9.0, 0);
    rail.rotation.y = Math.PI / 2;
    group.add(rail);
  }

  const northService = makeBox(86, 7.2, 14, facadeMat);
  northService.position.set(0, 3.6, -48.8);
  group.add(northService);
  addEdge(northService, group);

  const southService = northService.clone();
  southService.position.z = 48.8;
  group.add(southService);
  addEdge(southService, group);

  const eastService = makeBox(13, 6.2, 33, facadeMat);
  eastService.position.set(57.8, 3.1, 0);
  group.add(eastService);
  addEdge(eastService, group);

  const westService = eastService.clone();
  westService.position.x = -57.8;
  group.add(westService);
  addEdge(westService, group);

  if (state.textures.floorPlan) {
    const planMat = new THREE.MeshBasicMaterial({
      map: state.textures.floorPlan,
      transparent: true,
      opacity: 0.0,
      depthWrite: false
    });
    const planMesh = new THREE.Mesh(new THREE.PlaneGeometry(129, 111), planMat);
    planMesh.rotation.x = -Math.PI / 2;
    planMesh.position.y = 0.9;
    group.add(planMesh);
    state.planOverlays.push(planMesh);
  }
}

function createSecondaryStadium() {
  const center = toWorldFromPixel(CONFIG.modules.secondary.centerPixel.x, CONFIG.modules.secondary.centerPixel.y);
  state.centers.secondary = new THREE.Vector3(center.x, 0, center.z);
  const rotationY = THREE.MathUtils.degToRad(90 - CONFIG.modules.secondary.angleDeg);
  const group = new THREE.Group();
  group.position.set(center.x, 0, center.z);
  group.rotation.y = rotationY;
  root.add(group);

  const apronMat = new THREE.MeshStandardMaterial({ color: 0xb9c1ca, roughness: 0.92, metalness: 0.02 });
  const standMat = new THREE.MeshStandardMaterial({ color: 0xd8dde0, roughness: 0.9, metalness: 0.02 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x2f3a44, roughness: 0.66, metalness: 0.16 });
  const columnMat = new THREE.MeshStandardMaterial({ color: 0x505b65, roughness: 0.75, metalness: 0.16 });
  const facadeMat = new THREE.MeshStandardMaterial({ color: 0xd4d9de, roughness: 0.95, metalness: 0.01 });
  const trackMat = new THREE.MeshStandardMaterial({ color: 0xa24340, roughness: 0.9, metalness: 0.02 });

  [apronMat].forEach((m) => addMaterial("apron", m));
  [standMat].forEach((m) => addMaterial("stand", m));
  [roofMat].forEach((m) => addMaterial("roof", m));
  [columnMat].forEach((m) => addMaterial("column", m));
  [facadeMat].forEach((m) => addMaterial("facade", m));
  [trackMat].forEach((m) => addMaterial("track", m));

  const base = makeBox(124, 1.2, 104, apronMat);
  base.position.y = 0.6;
  group.add(base);

  const lowerStandGeom = createRingGeometry(
    { width: 116, depth: 96, radius: 12 },
    { width: 100, depth: 80, radius: 8 },
    3.2,
    18
  );
  const lowerStand = new THREE.Mesh(lowerStandGeom, standMat);
  lowerStand.position.y = 1.2;
  group.add(lowerStand);
  addEdge(lowerStand, group);

  const upperStandGeom = createRingGeometry(
    { width: 110, depth: 90, radius: 10 },
    { width: 98, depth: 78, radius: 7 },
    2.2,
    18
  );
  const upperStand = new THREE.Mesh(upperStandGeom, standMat);
  upperStand.position.y = 4.4;
  group.add(upperStand);
  addEdge(upperStand, group);

  const fieldMat = new THREE.MeshStandardMaterial({
    color: 0x0a3ea8,
    map: state.textures.fieldLines,
    roughness: 0.86,
    metalness: 0.03
  });
  addMaterial("field", fieldMat);
  const field = new THREE.Mesh(new THREE.PlaneGeometry(55, 91.4), fieldMat);
  field.rotation.x = -Math.PI / 2;
  field.position.y = 0.74;
  group.add(field);

  const trackGeom = createRingGeometry(
    { width: 63.5, depth: 99.5, radius: 8.7 },
    { width: 56.3, depth: 92.3, radius: 6.2 },
    0.12,
    20
  );
  const track = new THREE.Mesh(trackGeom, trackMat);
  track.position.y = 0.58;
  group.add(track);

  const mainRoof = makeBox(118, 1.0, 20, roofMat);
  mainRoof.position.set(0, 10.2, -39);
  group.add(mainRoof);
  addEdge(mainRoof, group);

  const rearRoof = makeBox(118, 1.0, 14, roofMat);
  rearRoof.position.set(0, 9.4, 39);
  group.add(rearRoof);
  addEdge(rearRoof, group);

  for (let i = -5; i <= 5; i += 1) {
    const x = i * 10;
    const northCol = makeBox(0.7, 8.8, 0.7, columnMat);
    northCol.position.set(x, 4.4, -35.5);
    group.add(northCol);
    const southCol = northCol.clone();
    southCol.position.z = 35.5;
    group.add(southCol);
  }

  const longFacade = makeBox(120, 6.2, 10, facadeMat);
  longFacade.position.set(0, 3.1, 47);
  group.add(longFacade);
  addEdge(longFacade, group);
}

function addGround() {
  const geometry = new THREE.PlaneGeometry(mapMetrics.widthMeters, mapMetrics.depthMeters);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 1.0,
    metalness: 0.0,
    map: state.textures.satellite
  });
  const ground = new THREE.Mesh(geometry, material);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  root.add(ground);
  addMaterial("ground", material);
}

async function addGeoJsonFeatures() {
  const data = await fetchFirstJson(CONFIG.geoJsonPaths, "osm_plan_vectors.geojson");

  const roadMat = new THREE.LineBasicMaterial({ color: 0x737373, transparent: true, opacity: 0.92 });
  const buildingMat = new THREE.MeshStandardMaterial({ color: 0xdfe4ea, roughness: 0.9, metalness: 0.03 });
  const roofBuildingMat = new THREE.MeshStandardMaterial({ color: 0xc8ced6, roughness: 0.88, metalness: 0.04 });

  addMaterial("roads", roadMat);
  addMaterial("building", buildingMat);
  addMaterial("roofBuilding", roofBuildingMat);

  for (const feature of data.features || []) {
    const geometry = feature.geometry;
    const props = feature.properties || {};

    if (geometry?.type === "LineString" && props.highway) {
      const points = geometry.coordinates.map(([lon, lat]) => {
        const p = toWorldFromLonLat(lon, lat);
        return new THREE.Vector3(p.x, 0.22, p.z);
      });
      const road = createRoadLine(points, roadMat);
      root.add(road);
      continue;
    }

    if (geometry?.type === "Polygon" && props.building) {
      const ring = geometry.coordinates[0].map(([lon, lat]) => {
        const p = toWorldFromLonLat(lon, lat);
        return new THREE.Vector2(p.x, -p.z);
      });

      const shape = new THREE.Shape(ring);
      const h = String(props.building).toLowerCase() === "roof" ? 3.1 : 5.2;
      const extrude = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false });
      extrude.rotateX(-Math.PI / 2);
      const mat = String(props.building).toLowerCase() === "roof" ? roofBuildingMat : buildingMat;
      const mesh = new THREE.Mesh(extrude, mat);
      mesh.position.y = 0.1;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      root.add(mesh);
    }
  }
}

function applyStyle(styleName) {
  state.styleName = styleName;
  const style = STYLE_PRESETS[styleName];
  scene.background = new THREE.Color(style.background);

  for (const mat of materialRegistry.ground) {
    mat.map = style.showSatellite ? state.textures.satellite : null;
    mat.color.set(style.showSatellite ? "#ffffff" : "#eef2f6");
    mat.needsUpdate = true;
  }
  for (const mat of materialRegistry.roads) mat.color.set(style.colors.roads);
  for (const mat of materialRegistry.building) mat.color.set(style.colors.building);
  for (const mat of materialRegistry.roofBuilding) mat.color.set(style.colors.roofBuilding);
  for (const mat of materialRegistry.field) mat.color.set(style.colors.field);
  for (const mat of materialRegistry.stand) mat.color.set(style.colors.stand);
  for (const mat of materialRegistry.standAccent) mat.color.set(style.colors.standAccent);
  for (const mat of materialRegistry.roof) mat.color.set(style.colors.roof);
  for (const mat of materialRegistry.column) mat.color.set(style.colors.column);
  for (const mat of materialRegistry.apron) mat.color.set(style.colors.apron);
  for (const mat of materialRegistry.facade) mat.color.set(style.colors.facade);
  for (const mat of materialRegistry.edge) mat.color.set(style.colors.edge);
  for (const mat of materialRegistry.track) mat.color.set(style.colors.track);
  for (const mat of materialRegistry.fence) mat.color.set(style.colors.fence);
  for (const mat of materialRegistry.foliage) mat.color.set(style.colors.foliage);
  for (const mat of materialRegistry.trunk) mat.color.set(style.colors.trunk);
  for (const mat of materialRegistry.marker) mat.color.set(style.colors.marker);

  for (const edge of state.edgeObjects) {
    edge.visible = style.showEdges;
  }

  for (const plan of state.planOverlays) {
    plan.visible = style.showPlanOverlay;
    plan.material.opacity = style.planOpacity;
  }

  scene.fog.color.set(style.background);
  if (appElement) {
    appElement.style.backgroundColor = style.background;
  }
  if (annotationContainer) {
    for (const item of state.domAnnotations) {
      item.marker.style.background = style.colors.marker || "#2d75de";
    }
  }
}

function initUi() {
  const realisticBtn = document.getElementById("style-realistic");
  const cleanBtn = document.getElementById("style-clean");
  const aerialBtn = document.getElementById("view-aerial");
  const mainBtn = document.getElementById("view-main");
  const secondaryBtn = document.getElementById("view-secondary");
  const tourBtn = document.getElementById("view-tour");

  realisticBtn.addEventListener("click", () => {
    realisticBtn.classList.add("active");
    cleanBtn.classList.remove("active");
    applyStyle("realistic");
  });
  cleanBtn.addEventListener("click", () => {
    cleanBtn.classList.add("active");
    realisticBtn.classList.remove("active");
    applyStyle("clean");
  });

  aerialBtn.addEventListener("click", () => {
    stopTour();
    tourBtn.textContent = "Start Tour";
    setActiveViewButton("view-aerial");
    startCameraTween(getViewPreset("aerial"));
  });
  mainBtn.addEventListener("click", () => {
    stopTour();
    tourBtn.textContent = "Start Tour";
    setActiveViewButton("view-main");
    startCameraTween(getViewPreset("main"));
  });
  secondaryBtn.addEventListener("click", () => {
    stopTour();
    tourBtn.textContent = "Start Tour";
    setActiveViewButton("view-secondary");
    startCameraTween(getViewPreset("secondary"));
  });
  tourBtn.addEventListener("click", () => {
    if (state.tour.running) {
      stopTour();
      tourBtn.textContent = "Start Tour";
      return;
    }
    tourBtn.textContent = "Stop Tour";
    startTour();
  });
}

function addLights() {
  const hemi = new THREE.HemisphereLight(0xe6f6ff, 0xbec7ce, 0.78);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xffffff, 1.22);
  sun.position.set(220, 280, 120);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -360;
  sun.shadow.camera.right = 360;
  sun.shadow.camera.top = 360;
  sun.shadow.camera.bottom = -360;
  scene.add(sun);

  const fill = new THREE.AmbientLight(0xffffff, 0.24);
  scene.add(fill);
}

async function loadTexture(path) {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(path, resolve, undefined, reject);
  });
}

async function loadFirstTexture(paths, label) {
  for (const path of paths) {
    try {
      return await loadTexture(path);
    } catch {
      // try next path
    }
  }
  throw new Error(`Cannot load ${label} from any candidate path.`);
}

async function fetchFirstJson(paths, label) {
  for (const path of paths) {
    try {
      const response = await fetch(path);
      if (response.ok) {
        return await response.json();
      }
    } catch {
      // try next path
    }
  }
  throw new Error(`Cannot load ${label} from any candidate path.`);
}

async function loadAssets() {
  state.textures.fieldLines = createFieldTexture();

  const [satellite, floorPlan] = await Promise.allSettled([
    loadFirstTexture(CONFIG.mapImagePaths, "satellite texture"),
    loadTexture(CONFIG.floorPlanPath)
  ]);

  if (satellite.status === "fulfilled") {
    state.textures.satellite = satellite.value;
    state.textures.satellite.colorSpace = THREE.SRGBColorSpace;
    state.textures.satellite.anisotropy = renderer.capabilities.getMaxAnisotropy();
  } else {
    console.warn("Satellite texture not loaded.", satellite.reason);
  }

  if (floorPlan.status === "fulfilled") {
    state.textures.floorPlan = floorPlan.value;
    state.textures.floorPlan.colorSpace = THREE.SRGBColorSpace;
    state.textures.floorPlan.anisotropy = renderer.capabilities.getMaxAnisotropy();
  } else {
    console.warn("Floor plan texture not loaded.", floorPlan.reason);
  }
}

function animate() {
  const now = performance.now();
  updateCameraTween(now);
  controls.update();
  for (const sprite of state.labelSprites) {
    const dist = camera.position.distanceTo(sprite.position);
    const scale = THREE.MathUtils.clamp(dist * 0.06, 22, 52);
    sprite.scale.set(scale, scale * 0.24, 1);
    sprite.quaternion.copy(camera.quaternion);
  }
  updateDomAnnotations(now);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(getAdaptivePixelRatio());
}

async function init() {
  try {
    setStatus("Loading site assets...");
    await loadAssets();
    addLights();
    addGround();
    setStatus("Building venue geometry...");
    await addGeoJsonFeatures();
    createMainStadium();
    createSecondaryStadium();
    addPerimeterObjects();
    addTreeLandscape();
    addVenueMarkers();

    const aerial = getViewPreset("aerial");
    controls.target.copy(aerial.target);
    camera.position.copy(aerial.position);
    controls.update();

    initUi();
    initDomAnnotations();
    setActiveViewButton("view-aerial");
    applyStyle("realistic");
    hideStatus();
    hideLoadingScreen();
    animate();
  } catch (error) {
    console.error(error);
    setStatus("Model load failed. Send me the error and I will fix it.");
    if (loadingScreenElement) {
      const title = loadingScreenElement.querySelector(".loading-title");
      const subtitle = loadingScreenElement.querySelector(".loading-subtitle");
      if (title) title.textContent = "Model load failed";
      if (subtitle) subtitle.textContent = String(error?.message || "Unknown error");
    }
  }
}

window.addEventListener("resize", onResize);

init();
