"use client";

import { Element } from "react-scroll";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [srcThumb, setSrcThumb] = useState([]);
  const [srcFull, setSrcFull] = useState([]);
  const quantity = 18;

  useEffect(() => {
    generatePhotosSrc(quantity);
  }, []);

  const generatePhotosSrc = (max) => {
    let srcThumb = [];
    let srcFull = [];
    for (let i = 1; i <= max; i++) {
      let nr = i;
      if (i < 10) nr = "0" + i;
      srcThumb.push("/photos/thumb/" + nr + "-thumb.jpg");
      srcFull.push("/photos/full/" + nr + "-full.jpg");
    }
    setSrcThumb(srcThumb);
    setSrcFull(srcFull);
    // console.log(srcFull, srcThumb);
  };

  return (
    <Element name="Galeria" className="gallery">
      <h2>Galeria</h2>

      <div className="flex flex-wrap justify-center gap-4 px-8">
        <PhotoProvider maskOpacity={0.7} maskClassName="backdrop-blur-sm">
          {srcThumb.map((item, index) => (
            <div key={index}>
              <PhotoView key={index} src={srcFull[index]}>
                <div>
                  <img
                    src={item}
                    alt={"thumbnail " + index}
                    width={300}
                    height={300}
                    className="h-[20rem] w-auto cursor-pointer shadow-lg border-4 border-light-accent dark:border-dark-accent dark:hover:border-dark-accent-2 hover:border-light-accent-3 transition-all hover:scale-105 hover:-rotate-1 hover:-translate-y-1 max-sm:w-full max-sm:h-auto"
                  />
                </div>
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
    </Element>
  );
};

export default Gallery;
