import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector(".canvas");

/*Scene*/
const scene = new THREE.Scene();
const sizes = {
  width: 800,
  height: 600,
};

/*creating a cube*/
const group = new THREE.Group();

scene.add(group);
/*Camera*/

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffd800 })
);
group.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x001106 })
);
cube2.position.set(-2, 0, 0);
group.add(cube2);
// mesh.position.set(2, 2, 0);
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.set(1, 1, 3);
// camera.lookAt(mesh.position);
scene.add(camera);
// console.log(mesh.position.distanceTo(camera.position));

/*Renderer*/
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
