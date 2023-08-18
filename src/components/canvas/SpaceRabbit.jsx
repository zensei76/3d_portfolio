/* eslint-disable react/no-unknown-property */

/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useFBX, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


// eslint-disable-next-line react/prop-types
const SpaceRabbit = ({ isMobile }) => {
  // const SpaceRabbit= useGLTF("./space_girl/scene.gltf");
  const fbx = useFBX("./Rabbit.fbx")

  return (
    <mesh>
      
    
      <hemisphereLight intensity={0}  groundColor='black' />
      <ambientLight intensity={0.6} />

      <primitive
        object={fbx}
        // scale={isMobile ? 0.7 : 5}
        scale={isMobile ? 0.0015 : 0.002}

        position={isMobile ? [-10, -3, -2.2] : [-5, -5, -1.5]}
        // position={isMobile ? [0, -3, -2.2] : [0, -1.25, -3]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  );
};



const SpaceRabbitCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        

        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <SpaceRabbit isMobile={isMobile} />

        </Suspense>

        <Preload all />
      </Canvas>
 
    </>
  );
};

export default SpaceRabbitCanvas;
