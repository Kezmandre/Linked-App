import React from "react";
import Vector from "../../assets/Images/Vector 4.png";
import Clip from "../../assets/Images/clip.png";
import Bulb from "../../assets/Images/bulb.png";
import Bang from "../../assets/Images/bang.png";
import Hero from "../../assets/Images/hero.png";
import Globe from "../../assets/Images/globe.png";
import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";
const Overview = () => {
  return (
    <div className="m-0 w-[100%] p-0 h-[830px] md:h-[510px] border-box gradientTwo">
      <Reveal>
        <div className="w-[95%] mx-auto">
          <motion.div
            className="relative mb-8"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <p className="font-montserrat text-right text-sm md:text-3xl font-bold text-white pt-2 pr-2">
              Ignite a Revolution in HR Innovation{" "}
              <img
                src={Vector}
                alt=""
                className="absolute top-10 right-2 w-[220px]"
              />
            </p>
          </motion.div>
          <div className=" flex flex-col md:flex-row justify-between items-center h-[80vh] md:h-[70vh]">
            <motion.div
              className="w-sm md:basis-2/4 h-full"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 1, type: "spring", duration: 1 }}
            >
              <div className=" mr-6 ml-4 mt-8 mb-4">
                <h1 className="text-center md:text-left text-4xl lg:text-6xl font-montserrat font-bold text-white">
                  getlinked{" "}
                  <span className="relative">
                    Tech{" "}
                    <img
                      src={Bulb}
                      alt=""
                      className="absolute top-[-30px] right-6 w-[30px]"
                    />{" "}
                  </span>{" "}
                  <br />
                </h1>
                <div className="flex justify-center md:justify-start">
                  <h1 className=" text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white">
                    {" "}
                    Hackathon <span className="text-textColor">1.0</span>
                  </h1>
                  <img src={Clip} alt="" className="w-10 h-10" />
                  <img src={Bang} alt="" className="w-10 h-10" />
                </div>
              </div>
              <p className="text-justify md:text-left text-white font-montserrat text-xl md:text-2xl px-4">
                Particpate in the getlinked tech Hackathon 2023 stand a chance
                to win a big price
              </p>
              <div className="w-[150px] mt-6 mx-auto md:mx-0">
                <button className="w-full m-4 shadow p-[8px] rounded-mx text-white btnGradient hover:p-[10px] md:block">
                  Register
                </button>
              </div>

              <div className="flex justify-center gap-2 items-center md:justify-start items-center my-8 text-white font-unica text-6xl md:text-4xl ml-4">
                <span>
                  00<sub className="text-sm">H</sub>
                </span>
                <span>
                  00<sub className="text-sm">M</sub>
                </span>
                <span>
                  00<sub className="text-sm">S</sub>
                </span>
              </div>
            </motion.div>

            <div className=" w-[300px] md:basis-2/4 h-full mr-8 mb-6">
              <div className=" relative w-full h-full">
                <img src={Hero} alt="" className="w-full h-full" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                    width: 300,
                    height: 300,
                    left: 8,
                    top: "10px",
                    position: "absolute",
                  }}
                >
                  <img
                    src={Globe}
                    alt=""
                    className="absolute top-[-2px] left-10 w-[200px] lg:w-[400px]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Overview;
