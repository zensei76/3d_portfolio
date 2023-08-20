/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";

import "./Dino.css"

const Dino = () => {

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
    <div
    //  className="h-screen flex justify-center items-center  ">
     className="absolute top-20 left-0 w-full h-full  ">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={isMobile ? 1.5 : 2.1} >
            
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={2}
              transparent
              opacity={0.5}
            />
          </Sphere>
        </Suspense>
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={` relative animate-img ${isMobile ? 'w-[300px] h-[100]':' w-[480px] h-100 ' }`}>
          <img
            className="w-full h-full object-contain animate-img"
            src="./Dino.png"
            alt="AstroDino"
          />
        </div>
      </div>
    </div>
  );
};

export default Dino;
