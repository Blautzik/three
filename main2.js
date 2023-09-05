import './style.css'
import * as THREE from 'three' 


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)

renderer.render(scene,camera)


const geometry = new THREE.PlaneBufferGeometry(30,30,200,200)
const plane = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xf23421}));

plane.rotation.x = - Math.PI / 2
plane.position.z = -25

const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

 
const pointLight = new THREE.PointLight(0xffffff, 1000 , 100)
pointLight.position.set(20,30,30)

const ambientLight = new THREE.AmbientLight(0XFFFFFF, 0.3 , 0)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(pointLight, ambientLight)




function animate(){
  requestAnimationFrame(animate)
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.008;

  renderer.render(scene, camera)
}


animate()