"use client";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./Three.module.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import starsTexture from '../../../../public/img/three/stars.jpg';
import sunTexture from '../../../../public/img/three/sun.jpg';
import mercuryTexture from '../../../../public/img/three/mercury.jpg';
import venusTexture from '../../../../public/img/three/venus.jpg';
import earthTexture from '../../../../public/img/three/earth.jpg';
import marsTexture from '../../../../public/img/three/mars.jpg';
import jupiterTexture from '../../../../public/img/three/jupiter.jpg';
import saturnTexture from '../../../../public/img/three/saturn.jpg';
import saturnRingTexture from '../../../../public/img/three/saturnring.png';
import uranusTexture from '../../../../public/img/three/uranus.jpg';
import uranusRingTexture from '../../../../public/img/three/uranusring.png';
import neptuneTexture from '../../../../public/img/three/neptune.jpg';
import plutoTexture from '../../../../public/img/three/pluto.jpg'; 


const Three: React.FC = () => {
  const canvasRef:any = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas });
  
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true; // Enable shadow mapping
  
      const scene = new THREE.Scene();
  
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
  
      const orbit = new OrbitControls(camera, renderer.domElement);
  
      camera.position.set(-90, 140, 140);
      orbit.update();
  
      const ambientLight = new THREE.AmbientLight(0x252525);
      scene.add(ambientLight);
  
      const cubeTextureLoader = new THREE.CubeTextureLoader();
      scene.background = cubeTextureLoader.load([
        starsTexture.src,
        starsTexture.src,
        starsTexture.src,
        starsTexture.src,
        starsTexture.src,
        starsTexture.src 
      ]);
  
      const textureLoader = new THREE.TextureLoader();
  
      const sunGeo = new THREE.SphereGeometry(16, 30, 30);
      const sunMat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(sunTexture.src),
        emissive: 0xFFFF00,  // Sun emits yellow light
        emissiveIntensity: 1
      });
      const sun = new THREE.Mesh(sunGeo, sunMat);
      sun.castShadow = true; // Sun casts shadow
      scene.add(sun);
  
      interface Ring {
        innerRadius: number;
        outerRadius: number;
        texture: string;
      }
  
      const createPlanet = (size: number, texture: string, position: number, ring?: Ring) => {
        const geo = new THREE.SphereGeometry(size, 30, 30);
        const mat = new THREE.MeshStandardMaterial({
          map: textureLoader.load(texture)
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true; // Planet casts shadow
        mesh.receiveShadow = true; // Planet receives shadow
        const obj = new THREE.Object3D();
        obj.add(mesh);
        if (ring) {
          const ringGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32);
          const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
          });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          obj.add(ringMesh);
          ringMesh.position.x = position;
          ringMesh.rotation.x = -0.5 * Math.PI;
        }
        scene.add(obj);
        mesh.position.x = position;
        return { mesh, obj };
      }
  
      const mercury = createPlanet(3.2, mercuryTexture.src, 28);
      const venus = createPlanet(5.8, venusTexture.src, 44);
      const earth = createPlanet(6, earthTexture.src, 62);
      const mars = createPlanet(4, marsTexture.src, 78);
      const jupiter = createPlanet(12, jupiterTexture.src, 100);
      const saturn = createPlanet(10, saturnTexture.src, 138, {
        innerRadius: 10,
        outerRadius: 20,
        texture: saturnRingTexture.src
      });
      const uranus = createPlanet(7, uranusTexture.src, 176, {
        innerRadius: 7,
        outerRadius: 12,
        texture: uranusRingTexture.src
      });
      const neptune = createPlanet(7, neptuneTexture.src, 200);
      const pluto = createPlanet(2.8, plutoTexture.src, 216);
  
      // Adding point light to simulate sunlight
      const pointLight = new THREE.PointLight(0xFFFFFF, 2, 500, 2);
      pointLight.position.set(0, 0, 0); // Inside the sun
      pointLight.castShadow = true; // Enable shadow casting
      scene.add(pointLight);
  
      // Configure shadow properties for the light
      pointLight.shadow.mapSize.width = 2048; // Increase shadow map resolution
      pointLight.shadow.mapSize.height = 2048;
      pointLight.shadow.camera.near = 0.1;
      pointLight.shadow.camera.far = 500;
  
      const animate = () => {
        // Self-rotation
        sun.rotateY(0.004);
        mercury.mesh.rotateY(0.004);
        venus.mesh.rotateY(0.002);
        earth.mesh.rotateY(0.02);
        mars.mesh.rotateY(0.018);
        jupiter.mesh.rotateY(0.04);
        saturn.mesh.rotateY(0.038);
        uranus.mesh.rotateY(0.03);
        neptune.mesh.rotateY(0.032);
        pluto.mesh.rotateY(0.008);
  
        // Around-sun-rotation
        mercury.obj.rotateY(0.04);
        venus.obj.rotateY(0.015);
        earth.obj.rotateY(0.01);
        mars.obj.rotateY(0.008);
        jupiter.obj.rotateY(0.002);
        saturn.obj.rotateY(0.0009);
        uranus.obj.rotateY(0.0004);
        neptune.obj.rotateY(0.0001);
        pluto.obj.rotateY(0.00007);
  
        renderer.render(scene, camera);
      }
  
      renderer.setAnimationLoop(animate);
  
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener('resize', onResize);
  
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }
  }, []);
  
  return <canvas ref={canvasRef} />
  
};

export default Three;


