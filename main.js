import * as THREE from 'three'

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
scene.add(camera)
camera.position.z=5
console.log(camera.position)

/* MESH => (shape & material) */
const cubeGeometry=new THREE.BoxGeometry(1,1,1)
const cubeMaterial=new THREE.MeshStandardMaterial({
  color:0x800000
})
const cube=new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cube)
console.log(cube.position)


const light=new THREE.DirectionalLight(0xffffff,10)
scene.add(light)
light.position.y=4
light.position.z=4
console.log(light.position)

const renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate(){
  // console.log("three.js is running!!!")
  cube.rotation.y+=0.01
  cube.rotation.x+=0.01
  renderer.render(scene,camera)
}

renderer.setAnimationLoop(animate)