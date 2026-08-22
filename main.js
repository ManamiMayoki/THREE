import * as THREE from 'three'

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

scene.add(camera)

/* MESH => (shape & material) */
const cubeGeometry=new THREE.BoxGeometry(1,1,1)
const cubeMaterial=new THREE.MeshStandardMaterial({
  color:0x800000
})
const cube=new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cube)
const light=new THREE.DirectionalLight(0xffffff,1)
scene.add(light)