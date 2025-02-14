import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import '../App.css'
function MyGlobeComponent() {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;

    // Add clouds sphere
    const CLOUDS_IMG_URL = './clouds.png'; // Ensure you have this file in the public folder
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);

  return (
      <Globe
        height={200}
        width={200}
        backgroundColor='rgba(0,0,0,0)'
        ref={globeEl}
        animateIn={false}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      />
  );
}

export default MyGlobeComponent;
