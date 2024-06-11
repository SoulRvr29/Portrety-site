"use client";

import { Element } from "react-scroll";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [srcThumb, setSrcThumb] = useState([]);
  const [srcFull, setSrcFull] = useState([]);
  const [galleryType, setGalleryType] = useState("persons");
  const quantity = {
    persons: 12,
    animals: 5,
    sacred: 1,
  };

  useEffect(() => {
    generatePhotosSrc(quantity[galleryType]);
  }, []);

  const generatePhotosSrc = (max) => {
    let srcThumb = [];
    let srcFull = [];
    for (let i = 1; i <= max; i++) {
      let nr = i;
      if (i < 10) nr = "0" + i;
      srcThumb.push("/photos/" + galleryType + "/thumb/" + nr + "-thumb.jpg");
      srcFull.push("/photos/" + galleryType + "/full/" + nr + "-full.jpg");
    }
    setSrcThumb(srcThumb);
    setSrcFull(srcFull);
  };

  useEffect(() => {
    generatePhotosSrc(quantity[galleryType]);
  }, [galleryType]);

  return (
    <Element name="Galeria" className="gallery">
      <h2>Galeria</h2>

      <div className="flex max-sm:text-3xl max-sm:gap-4 justify-center text-4xl font-caveat gap-8 pb-4 ">
        <button
          className={
            "hover:text-light-accent-3 hover:dark:text-dark-accent-3" +
            (galleryType === "persons"
              ? " text-light-accent-3 dark:text-dark-accent-3"
              : "")
          }
          onClick={() => {
            setGalleryType("persons");
          }}
        >
          osoby
        </button>
        <button
          className={
            "hover:text-light-accent-3 hover:dark:text-dark-accent-3" +
            (galleryType === "animals"
              ? " text-light-accent-3 dark:text-dark-accent-3"
              : "")
          }
          onClick={() => {
            setGalleryType("animals");
          }}
        >
          zwierzęta
        </button>
        <button
          className={
            "hover:text-light-accent-3 hover:dark:text-dark-accent-3" +
            (galleryType === "sacred"
              ? " text-light-accent-3 dark:text-dark-accent-3"
              : "")
          }
          onClick={() => {
            setGalleryType("sacred");
          }}
        >
          sakralne
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-8 max-sm:px-12">
        <PhotoProvider
          maskOpacity={0.7}
          maskClassName="backdrop-blur-sm"
          loadingElement={<div className="loader"></div>}
        >
          {srcThumb.map((item, index) => (
            <div key={index}>
              <PhotoView key={index} src={srcFull[index]}>
                <motion.div
                // animate={{ opacity: 1 }}
                // initial={{ opacity: 0 }}
                // transition={{ duration: 1 }}
                >
                  <Image
                    src={item}
                    alt={"thumbnail " + index}
                    width={300}
                    height={300}
                    className="h-[20rem] w-auto cursor-pointer shadow-lg border-4 border-light-accent dark:border-dark-accent dark:hover:border-dark-accent-2 hover:border-light-accent-3 transition-all hover:scale-105 hover:-rotate-1 hover:-translate-y-1 max-sm:w-screen max-sm:h-auto"
                  />
                </motion.div>
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
    </Element>
  );
};

export default Gallery;
