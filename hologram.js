import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const CYAN = 0x39e6ff;
const AMBER = 0xffb020;

export function initHologram(canvas, labelLayer) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x02060a, 0.14);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 1.0, 4.4);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.95, 0);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.1;
  controls.minPolarAngle = Math.PI * 0.30;
  controls.maxPolarAngle = Math.PI * 0.66;
  controls.rotateSpeed = 0.6;

  // ---- build the wireframe human from primitives ----
  const human = new THREE.Group();
  scene.add(human);

  const lineMat = new THREE.LineBasicMaterial({
    color: CYAN, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  // faint inner shell for volume (very low opacity, additive)
  const shellMat = new THREE.MeshBasicMaterial({
    color: 0x0e4a63, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false,
  });

  function part(geom, pos = [0,0,0], rot = [0,0,0]) {
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(geom), lineMat);
    const shell = new THREE.Mesh(geom, shellMat);
    const g = new THREE.Group();
    g.add(wire); g.add(shell);
    g.position.set(...pos); g.rotation.set(...rot);
    human.add(g);
    return g;
  }

  const cap = (r, len, rseg = 14, cseg = 5) => new THREE.CapsuleGeometry(r, len, cseg, rseg);

  // head + neck
  part(new THREE.IcosahedronGeometry(0.135, 2), [0, 1.66, 0]);
  part(cap(0.055, 0.06, 10, 3), [0, 1.5, 0]);
  // torso (chest -> waist), slight taper via two capsules
  part(cap(0.215, 0.30, 18, 6), [0, 1.24, 0]);
  part(cap(0.175, 0.12, 16, 4), [0, 0.99, 0]); // pelvis
  // shoulders caps
  const lSh = part(new THREE.IcosahedronGeometry(0.10, 1), [0.245, 1.40, 0]);
  const rSh = part(new THREE.IcosahedronGeometry(0.10, 1), [-0.245, 1.40, 0]);
  // arms: upper + fore, angled slightly out
  part(cap(0.058, 0.26, 12, 4), [0.30, 1.16, 0], [0, 0, 0.16]);
  part(cap(0.050, 0.24, 12, 4), [0.345, 0.86, 0], [0, 0, 0.20]);
  part(new THREE.IcosahedronGeometry(0.055, 1), [0.375, 0.66, 0]); // hand
  part(cap(0.058, 0.26, 12, 4), [-0.30, 1.16, 0], [0, 0, -0.16]);
  part(cap(0.050, 0.24, 12, 4), [-0.345, 0.86, 0], [0, 0, -0.20]);
  part(new THREE.IcosahedronGeometry(0.055, 1), [-0.375, 0.66, 0]);
  // legs: thigh + shin + foot
  part(cap(0.088, 0.34, 14, 5), [0.10, 0.66, 0]);
  part(cap(0.068, 0.34, 12, 5), [0.105, 0.28, 0]);
  part(new THREE.BoxGeometry(0.10, 0.06, 0.22), [0.105, 0.03, 0.04]);
  part(cap(0.088, 0.34, 14, 5), [-0.10, 0.66, 0]);
  part(cap(0.068, 0.34, 12, 5), [-0.105, 0.28, 0]);
  part(new THREE.BoxGeometry(0.10, 0.06, 0.22), [-0.105, 0.03, 0.04]);

  // ---- priority hotspots (side delts = Scientist's call) + engine (legs) ----
  const hotspots = [];
  function hotspot(pos, color, key, text) {
    const s = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    s.position.set(...pos);
    human.add(s);
    const el = document.createElement('div');
    el.className = 'holo-label ' + key;
    el.innerHTML = text;
    labelLayer.appendChild(el);
    hotspots.push({ s, el, base: 0.05 });
  }
  hotspot([0.30, 1.42, 0.02], AMBER, 'prio', 'SIDE DELT<br><b>PRIORITY</b>');
  hotspot([-0.30, 1.42, 0.02], AMBER, 'prio', '');
  hotspot([0.11, 0.40, 0.10], CYAN, 'eng', 'ENGINE<br><b>BUILD</b>');

  // ---- ground grid ----
  const grid = new THREE.GridHelper(6, 24, CYAN, 0x0c2a38);
  grid.material.transparent = true; grid.material.opacity = 0.22; grid.position.y = -0.02;
  scene.add(grid);

  // ---- bloom ----
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.9, 0.5, 0.2);
  composer.addPass(bloom);

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize); ro.observe(canvas.parentElement);
  resize();

  const v = new THREE.Vector3();
  let t = 0;
  function loop() {
    requestAnimationFrame(loop);
    t += 0.016;
    controls.update();
    // pulse + project hotspot labels
    hotspots.forEach((h, i) => {
      const p = 1 + 0.25 * Math.sin(t * 3 + i);
      h.s.scale.setScalar(p);
      h.s.material.opacity = 0.55 + 0.35 * (0.5 + 0.5 * Math.sin(t * 3 + i));
      if (h.el.textContent) {
        v.copy(h.s.position); v.applyMatrix4(human.matrixWorld); v.project(camera);
        const x = (v.x * 0.5 + 0.5) * canvas.clientWidth;
        const y = (-v.y * 0.5 + 0.5) * canvas.clientHeight;
        const vis = v.z < 1;
        h.el.style.opacity = vis ? 0.92 : 0;
        h.el.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`;
      }
    });
    human.children.forEach(c => { if (c.type === 'Group') { /* subtle breathe */ } });
    human.position.y = Math.sin(t * 0.8) * 0.015;
    composer.render();
  }
  loop();

  return { scene, camera, renderer };
}
