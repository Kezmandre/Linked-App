import React from "react";
import Liberty1 from "../../assets/Images/Liberty1.png";
import Liberty2 from "../../assets/Images/liberty2.png";
import Winwise from "../../assets/Images/Winwise.png";
import Wisper from "../../assets/Images/wisper.png";
import Vuzual from "../../assets/Images/Vuzual.png";
import Paybox from "../../assets/Images/Paybox.png";

const Sponsors = () => {
  return (
    <div className="m-0 pb-14 bg-colorBg">
      <div className="w-5/6 mx-auto">
        <div className="w-sm md:w-[550px] mx-auto">
          <h2 className="font-montserrat text-center text-2xl py-8 text-white font-semibold">
            Partners and Sponsors
          </h2>
          <p className="font-montserrat text-white text-center pb-8">
            {" "}
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="sponsor">
          <div className="w-5/6 mx-auto p-8 flex justify-center gap-2 items-center flex-wrap">
            <div className="w-[90px] md:w-[250px]  h-[120px] pb-4 flex justify-center items-center   border-textColor">
              <img src={Liberty1} alt="" />
            </div>
            <div className="w-[90px] md:w-[250px] h-[120px] flex justify-center items-center border-l-2 border-textColor  ">
              <img src={Liberty2} alt="" />
            </div>
            <div className="w-[90px] md:w-[250px] h-[120px] flex justify-center items-center border-l-2 border-textColor  ">
              <img src={Winwise} alt="" />
            </div>
            <div className="w-[90px] md:w-[250px] h-[120px] flex justify-center pt-6 items-center border-t-2 border-textColor ml-2">
              <img src={Wisper} alt=""  />
            </div>
            <div className="w-[90px] md:w-[250px] h-[120px] flex justify-center items-center border-t-2 border-textColor ">
              <img src={Paybox} alt="" />
            </div>
            <div className="w-[90px] md:w-[250px] h-[120px]  flex justify-center items-center border-t-2 border-textColor">
              <img src={Vuzual} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
