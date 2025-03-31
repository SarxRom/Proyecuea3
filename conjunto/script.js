// script.js

// Crear la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("modelo3d-container").appendChild(renderer.domElement);

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Configurar la cámara
camera.position.z = 5;

// Cargar el modelo 3D (reemplaza 'assets/modelo.glb' con tu modelo)
const loader = new THREE.GLTFLoader();
loader.load('assets/blender/mascara.glb', function (gltf) {
    scene.add(gltf.scene);
    animate();  // Iniciar la animación después de cargar el modelo
}, undefined, function (error) {
    console.error(error);
});
