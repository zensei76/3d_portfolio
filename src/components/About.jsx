/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      {/* {title} */}
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <AnimatePresence>
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <p className='pb-5 pl-0'>
            <p>
              I am a web artisan, weaving digital constellations with the cosmic
              array of{" "}
              <span className='bg-gradient-to-b from-blue-500 via-green-500  bg-clip-text text-transparent'>
                React
              </span>
              ,{" "}
              <span className='bg-gradient-to-b from-blue-500 via-green-500  bg-clip-text text-transparent'>
                JavaScript
              </span>
              ,{" "}
              <span className='bg-gradient-to-b from-blue-500 via-green-500  bg-clip-text text-transparent'>
                jQuery
              </span>
              ,{" "}
              <span className='bg-gradient-to-b from-blue-500 via-green-500  bg-clip-text text-transparent'>
                HTML
              </span>
              ,{" "}
              <span className='bg-gradient-to-b from-blue-500 via-green-500  bg-clip-text text-transparent'>
                CSS
              </span>
              ,{" "}
              <span className='bg-gradient-to-b from-blue-500 via-green-500  bg-clip-text text-transparent'>
                Node.js
              </span>
              , and{" "}
              <span className='bg-gradient-to-b from-blue-500 via-green-500  bg-clip-text text-transparent'>
                MongoDB
              </span>
              . My odyssey is propelled by an unyielding quest for excellence,
              guided by the ethos of deciphering the 'why' beneath each line of
              code. This cosmic curiosity not only fuels my prowess in
              unraveling challenges but also stokes my fervor for embracing new
              technologies and realms.
            </p>
          </p>
          <p className='pb-5 pl-8'>
            My portfolio stands as a tribute to unwavering dedication.skillfully
            blending creativity and functionality. While past achievements
            shimmer like stardust, my gaze remains fixed on the future.
          </p>
          <p className='pl-16'>
            Join me in the cosmic realm, where we'll craft digital wonders and
            explore limitless innovation. Embark on this stellar journey with
            me"
          </p>
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    </AnimatePresence>
  );
};

export default SectionWrapper(About, "about");
// export default About;
