"use client";
import { Element } from "react-scroll";
import Gallery from "./sections/Gallery";
import Order from "./sections/Order";
import Prices from "./sections/Prices";
import Contact from "./sections/Contact";
import { motion, spring } from "framer-motion";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Page() {
  return (
    <main className=" pb-20 max-sm:pb-8 px-8 max-sm:px-4 flex flex-col gap-10 max-sm:gap-4">
      <Element name="Główna">
        <motion.h1
          initial={{ scaleX: 0.8, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="font-caveat text-center max-w-4xl mx-auto max-md:text-2xl pt-10 max-sm:pt-4"
        >
          Sunt quis optio laudantium maxime eos harum illo, itaque perferendis
          quisquam facilis.
        </motion.h1>
      </Element>
      <ScrollAnimation>
        <Gallery />
      </ScrollAnimation>
      <ScrollAnimation>
        <Prices />
      </ScrollAnimation>
      <ScrollAnimation>
        <Order />
      </ScrollAnimation>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
    </main>
  );
}
