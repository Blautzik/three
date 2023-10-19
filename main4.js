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
plane.rotation.x = Math.PI / 2 + 45;
scene.add(plane);


const posiciones = plane.geometry.attributes.position.array;
const posicionesOriginales = [...posiciones];
const cantidadVertices = posiciones.length / 3;

let animationStartTime = null;
const animationDuration = 4000; // 2 seconds

function animate() {
  requestAnimationFrame(animate);

  if (animationStartTime === null) {
    animationStartTime = performance.now();
  }

  const currentTime = performance.now();
  const time = currentTime - animationStartTime;

  for (let i = 0; i < cantidadVertices; i++) {
    const x = posicionesOriginales[i * 3];
    const distanciaDeY = Math.abs(x) / 0.5;
    const progress = (time / animationDuration) * Math.PI * 0.5; 

    const offset = Math.sin(progress + x ) ; 

    posiciones[i * 3 + 2] = posicionesOriginales[i * 3 + 2] + offset * distanciaDeY;
  }

  plane.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
}

animate();