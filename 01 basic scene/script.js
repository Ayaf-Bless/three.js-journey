const wbgl = document.querySelector(".wbgl");
const scene = new THREE.Scene();
const sizes = {
  width: 800,
  height: 600,
};

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 2;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: wbgl,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
