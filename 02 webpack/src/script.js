import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector(".canvas");

/*Scene*/
const scene = new THREE.Scene();

/*creating a cube*/
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 1;
mesh.position.x = -2;
mesh.position.z = -2;
//add the cube to the scene
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

/*Camera*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
console.log(mesh.position.distanceTo(camera.position));

/*Renderer*/
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
