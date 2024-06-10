import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {  Link } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  
`;

const CertificationCard = ({
  index,
  name,
  image,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px]  w-full "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={Link}
                alt="source code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
        </div>

        
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 800, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1100, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1300, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1500, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1700, itemsToShow: 6, itemsToScroll: 6 },
    { width: 1900, itemsToShow: 7, itemsToScroll: 7 },
    { width: 2000, itemsToShow: 8, itemsToScroll: 8 },
    { width: 2200, itemsToShow: 9, itemsToScroll: 9 },
    { width: 2400, itemsToShow: 10, itemsToScroll: 10 },
  ];

  

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have earned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-20`}>
          Certifications.
        </h2>
      </motion.div>

      <CarouselWrapper>
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay={true}
          autoPlaySpeed={8000}
          showArrows={true}
          enableSwipe={true}
          
        >
          {certificates.map((certificate, index) => (
            <CertificationCard
              key={`certificate-${index}`}
              index={index}
                {...certificate} />
          ))}
        </Carousel>
      </CarouselWrapper>
    </>
  );
};

export default SectionWrapper(Certifications, "");
