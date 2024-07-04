"use client";

import { Element } from "react-scroll";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import photosData from "../photos.json";

const Gallery = () => {
  const [srcThumb, setSrcThumb] = useState([]);
  const [srcFull, setSrcFull] = useState([]);
  const [galleryType, setGalleryType] = useState("persons");
  const [actualData, setActualData] = useState(
    photosData.filter((item) => item.type === "persons")[0]
  );

  useEffect(() => {
    generatePhotosSrc();
  }, [galleryType]);

  const generatePhotosSrc = () => {
    let srcThumb = [];
    let srcFull = [];
    for (let i = 1; i <= actualData.quantity; i++) {
      let nr = i;
      if (i < 10) nr = "0" + i;
      srcThumb.push("/photos/" + galleryType + "/thumb/" + nr + "-thumb.jpg");
      srcFull.push("/photos/" + galleryType + "/full/" + nr + "-full.jpg");
    }
    setSrcThumb(srcThumb);
    setSrcFull(srcFull);
  };

  const galleryChange = (name) => {
    setGalleryType(name);
    const newData = photosData.filter((data) => data.type === name)[0];
    if (newData) {
      setActualData(newData);
      generatePhotosSrc();
    }
  };

  return (
    <Element name="Galeria" className="gallery ">
      <h2>Galeria</h2>

      <div className="flex max-sm:text-3xl max-sm:gap-4 justify-center text-4xl font-caveat gap-8 pb-4 ">
        {photosData.map((item) => (
          <button
            key={item.type}
            className={
              "hover:text-light-accent-3 hover:dark:text-dark-accent-3" +
              (galleryType === item.type
                ? " text-light-accent-3 dark:text-dark-accent-3"
                : "")
            }
            onClick={() => galleryChange(item.type)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className=" flex flex-wrap justify-center gap-4 max-sm:px-4 ">
        <PhotoProvider
          maskOpacity={0.7}
          maskClassName="backdrop-blur-sm "
          loadingElement={<div className="loader"></div>}
          key={srcFull}
        >
          {srcThumb.map((item, index) => (
            <div key={index}>
              <PhotoView key={index} src={srcFull[index]}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={item}
                    alt={"thumbnail " + index}
                    width={actualData?.thumbnails?.[index]?.width || 300}
                    height={actualData?.thumbnails?.[index]?.height || 300}
                    className="h-[20rem] w-auto cursor-pointer shadow-lg border-4 border-light-accent dark:border-dark-accent dark:hover:border-dark-accent-2 hover:border-light-accent-3 transition-all hover:scale-105 hover:-rotate-1 hover:-translate-y-1 max-sm:w-full max-sm:max-w-[15rem] max-sm:h-auto"
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
