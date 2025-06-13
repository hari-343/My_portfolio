import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Hero() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;
    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full z-0" ref={canvasRef} />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold">Hari Karan C</h1>
        <p className="text-xl mt-2">Creative Web Developer</p>
        <a href="#projects" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">View My Work</a>

        {/* Contact Info */}
        <div className="mt-6 space-y-2 text-sm">
          <p>Email: <a href="mailto:harihk0707@gmail.com" className="underline text-blue-400 hover:text-blue-200">harihk0707@gmail.com</a></p>
          <p>
            <a href="https://www.linkedin.com/in/harikaran-chandrasekaran-b79190264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-200">
              LinkedIn
            </a>{' '}
            |{' '}
            <a href="https://github.com/hari-343" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-200">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
