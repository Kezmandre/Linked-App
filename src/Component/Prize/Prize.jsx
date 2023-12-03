import React from "react";
import Trophy from "../../assets/Images/prize.png";
import Silver from "../../assets/Images/silver.png"
import Gold from "../../assets/Images/gold.png"
import Bronze from "../../assets/Images/bronze.png"

const Prize = () => {
  return (
    <div className="m-0 py-14 bg-colorBg">
      <div className="w-5/6 mx-auto">
        <div className="flex  justify-center md:justify-right  md-0 md:-ml-20 pt-14 pb-12 flex-col items-center">
          <h2 className="font-montserrat text-2xl font-semibold text-white pb-10 ">
            Prizes And <br />
            <span className="text-textColor">Reward</span>
          </h2>
          <p className="font-montserrat text-white text-center">
          Highlight of the prizes or reward for winners and for Participants
        </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-sm md:basis-2/4">
            <div className="w-5/6 mx-auto">
              <img src={Trophy} alt="" className="w-full" />
            </div>
          </div>
          <div className="w-[500px] md:basis-2/4 flex justify-center mt-[120px] md:mt-0 items-center gap-6">
            <div className="grow md:w-[200px] h-[250px] relative prize1">
              <div className="w-3/4  mx-auto mt-24 font-montserrat">
                <p className="text-white text-center text-xl font-semibold">
                  2nd
                </p>
                <p className="text-white text-center text-xl font-medium">
                  runner
                </p>
                <p className="text-center text-2xl text-textColor font-semibold">
                  N300,000
                </p>
              </div>
              <div className="absolute top-[-90px] left-2">
                <img src={Silver} alt="" />
              </div>
            </div>
            <div className="grow md:w-[200px] h-[250px] relative prize2">
              <div className="w-3/4  mx-auto mt-24 font-montserrat">
                <p className="text-white text-center text-xl font-semibold">
                  1st
                </p>
                <p className="text-white text-center text-xl font-medium">
                  runner
                </p>
                <p className="text-center text-2xl text-textColor font-semibold">
                  N400,000
                </p>
              </div>
              <div className="absolute top-[-95px] left-2">
                <img src={Gold} alt="" />
              </div>
            </div>
            <div className="grow md:w-[200px] h-[250px] prize1 relative">
              <div className="w-3/4  mx-auto mt-24 font-montserrat">
                <p className="text-white text-center text-xl font-semibold">
                  3rd
                </p>
                <p className="text-white text-center text-xl font-medium">
                  runner
                </p>
                <p className="text-center text-2xl text-textColor font-semibold">
                  N150,000
                </p>
              </div>
              <div className="absolute top-[-95px] left-2">
                <img src={Bronze} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
