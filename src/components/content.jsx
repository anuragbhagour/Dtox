import React from 'react';
import { Button } from './ui/button';
import BlurText from "./content-title";
import Squares from './square-pattern';

const Content = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Background Squares */}
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
        className="absolute inset-0 z-0"
      />

      {/* Text and Button */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-12 grid-rows-6 w-full h-full text-center">
          {/* Text inside the grid */}
          <div className="col-span-12 row-span-6 flex items-center justify-center">
            <BlurText
              text="Dtox is a obvious step towards Detoxifying yourself"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => console.log("Animation complete")}
              className="text-5xl text-center text-white font-extrabold white-shadow"
            />
          </div>
        </div>
        <div className="mt-8 mb-16">
          <Button size="lg" onClick={() =>
          document.getElementById("section1").scrollIntoView({ behavior: "smooth" })
        }>Explore more</Button>
        </div>
      </div>
    </div>
  );
};

export default Content;