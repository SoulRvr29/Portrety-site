"use client";
import { Element } from "react-scroll";
import Gallery from "./sections/Gallery";
import Order from "./sections/Order";
import Prices from "./sections/Prices";
import Contact from "./sections/Contact";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <main className="pb-20 flex flex-col gap-10">
      <Element name="Główna">
        <h1 className="font-caveat text-center p-10 max-w-4xl mx-auto max-md:text-2xl">
          Sunt quis optio laudantium maxime eos harum illo, itaque perferendis
          quisquam facilis.
        </h1>
      </Element>
      <Gallery />
      <motion.div>
        <Prices />
      </motion.div>
      <Order />
      <Contact />
    </main>
  );
}
