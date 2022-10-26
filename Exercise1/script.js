console.log(THREE)

const scene = new THREE.Scene()

// Red cube 
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:"red"})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

// sizes
const sizes= {
    width:800,
    height:600
}

// camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// 75 is field of view of camera the angle that is visible mostly we use 45
// more angle leads to distortions on the side
// we can postion the camera on the 3d axis
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = -1;

scene.add(camera)

// create renderer
const canvas = document.querySelector(".webgl")

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)