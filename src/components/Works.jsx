/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */


import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl w-[317px] '>
        <div className='relative w-full '>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px] h-[200px]'>
            {description}
          </p>
        </div>

        <div className=' flex justify-end m-3 '>
          <button
            onClick={() => window.open(website_link, "_blank")}
            className="'bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            visit
          </button>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1124, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Step into my portfolio, a realm where imagination breathes life into
          digital wonders. Embark on a voyage through a captivating collection
          of projects that radiate my fervor for web development. Each creation
          is a testament to my unwavering dedication, and I'm thrilled to unveil
          this snapshot of my creative journey, inviting you to explore the
          universe of my accomplishments.
        </motion.p>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}

      <div className='mt-20 w-full  '>
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          showDots={true}
          centerMode={false}
          containerClass='carousel-container'
          itemClass='carousel-item-padding-40-px'
          
          
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Carousel>
      </div>
    </>
  );
};



export default SectionWrapper(Works, "");
