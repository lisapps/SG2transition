import React, { useEffect } from "react";
import gsap from "gsap";
// import * as dat from "dat.gui";
import * as THREE from "three";
// import OrbitControls from "threejs-orbit-controls";

// const gui = new dat.GUI();

const world = {
  plane: {
    width: 400,
    height: 200,
    widthSegments: 50,
    heightSegments: 50,
  }
};

let horizonView = true;
let hasOrbitControls =  false;

// gui.add(world.plane, "width", 1, 500).onChange(generatePlane);
// gui.add(world.plane, "height", 1, 500).onChange(generatePlane);
// gui.add(world.plane, "widthSegments", 1, 100).onChange(generatePlane);
// gui.add(world.plane, "heightSegments", 1, 100).onChange(generatePlane);
// gui.add(world.camera, "test", 1, 500).onChange(generatePlane);
// gui.add(world.camera, "test2", 1, 500).onChange(generatePlane);
// gui.add(world.camera, "test3", 1, 500).onChange(generatePlane);

function generatePlane() {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(
    world.plane.width,
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments,
  );

  // vertice position randomization
  const { array } = planeMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 4;
    }

    randomValues.push(Math.random() * Math.PI * 2);
  }

  planeMesh.geometry.attributes.position.randomValues = randomValues;
  planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array;

  const colors = [];
  for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
    colors.push(0.1, 0.1, 0.1);
  }

  planeMesh.geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));

}

const raycaster = new THREE.Raycaster();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(1920, 1080);
renderer.setPixelRatio(devicePixelRatio);

// document.body.appendChild(renderer.domElement)
if(hasOrbitControls){
  const orbit = new OrbitControls(camera, renderer.domElement);
}

if(horizonView){
  camera.position.x = 0;
  camera.position.y = -38;
  camera.position.z = 22;
  camera.rotation.x = 1.4;
}else{
  camera.position.z = 25;
}

const planeGeometry = new THREE.PlaneGeometry(
  world.plane.width,
  world.plane.height,
  world.plane.widthSegments,
  world.plane.heightSegments,
);
const planeMaterial = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
  vertexColors: true,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

scene.add(planeMesh);
generatePlane();

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, -1, 1);
scene.add(light);

const backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(0, 0, -1);
scene.add(backLight);

const mouse = {
  x: undefined,
  y: undefined,
};

let frame = 0;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  raycaster.setFromCamera(mouse, camera);
  frame += 0.01;

  const { array, originalPosition, randomValues } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.03;

    // y
    array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.001;
  }

  planeMesh.geometry.attributes.position.needsUpdate = true;

  const intersects = raycaster.intersectObject(planeMesh);

  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes;

    // vertice 1
    color.setX(intersects[0].face.a, 0.25);
    color.setY(intersects[0].face.a, 0.25);
    color.setZ(intersects[0].face.a, 0.25);

    // vertice 2
    color.setX(intersects[0].face.b, 0.25);
    color.setY(intersects[0].face.b, 0.25);
    color.setZ(intersects[0].face.b, 0.25);

    // vertice 3
    color.setX(intersects[0].face.c, 0.25);
    color.setY(intersects[0].face.c, 0.25);
    color.setZ(intersects[0].face.c, 0.25);

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    const initialColor = {
      r: 0.1,
      g: 0.1,
      b: 0.1,
    };

    const hoverColor = {
      r: 0.25,
      g: 0.25,
      b: 0.25,
    };

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      },
    });
  }
}

animate();

addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});

const C_PolygonBg = ({ classMods }) => {

  useEffect(() => {
    let el = document.getElementById("c-polygonBg");
    el.appendChild(renderer.domElement);
  }, []);

  return (
    <div
      id="c-polygonBg"
      className={
        `c-polygonBg ` +
        classMods +
        ` u-animated u-animated--delayFast u-animated--slowest a-fadeIn`
      }
    ></div>
  );
};

export default C_PolygonBg;
