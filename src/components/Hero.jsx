/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SpaceRabbitCanvas, Dino } from "./canvas";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";


const Hero = () => {

  // const texture = useLoader(TextureLoader, "./astroDino.png");



  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px] relative  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Bhargav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            web developer.
            <br className='sm:block hidden ' />
          </p>
          <p className=' text-[12px] text-white opacity-50 '>
            Full Stack | Frontend
          </p>
        </div>
      </div>
      <SpaceRabbitCanvas />

      {/* <Dino /> */}
      
      
      {/* <div className='absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2  '>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
