import { Element } from "react-scroll";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Gallery = () => {
  return (
    <Element name="Galeria" className="gallery">
      <h2>Galeria</h2>
      <div className="flex gap-4 flex-wrap justify-center opacity-40 p-4">
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
        <div className="h-52 w-52 bg-black cursor-pointer border-2 border-transparent hover:border-white"></div>
      </div>
    </Element>
  );
};

export default Gallery;
