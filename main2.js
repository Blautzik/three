import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0, 0, 30);

const g1 = new THREE.PlaneGeometry(20, 20, 50, 50);
const m1 = new THREE.MeshBasicMaterial({ color: 0xFF2586, wireframe: true });

const plane = new THREE.Mesh(g1, m1);
plane.rotation.x = Math.PI / 2 +45;
scene.add(plane);

// Distort plane
const positions = plane.geometry.attributes.position.array;
const originalPositions = [...positions];
const count = positions.length / 3;

let animationStartTime = null;
const animationDuration = 2000; // 2 seconds

function animate() {
  requestAnimationFrame(animate);

  if (animationStartTime === null) {
    animationStartTime = performance.now();
  }

  const currentTime = performance.now();
  const elapsedTime = currentTime - animationStartTime;

  for (let i = 0; i < count; i++) {
    const x = originalPositions[i * 3];
    const distanceFromCenterY = Math.abs(x) / 10;
    const randomOffset = Math.sin((elapsedTime / animationDuration) * Math.PI) * 0.5; // Adjusted distortion

    positions[i * 3 + 2] = originalPositions[i * 3 + 2] + randomOffset * distanceFromCenterY;
  }

  // Update the plane's geometry
  plane.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
}

animate();