import React from "react";
import Trophy from "../../assets/Images/prize.png"

const Prize = () => {
  return (
    <div className="m-0 p-0 bg-colorBg">
      <div className="w-5/6 mx-auto">
        <div className="flex justify-right ml-20 pt-14 flex-col items-center">
        <h2 className="font-montserrat text-2xl font-semibold text-white ">
          Prizes And <br />
          <span className="text-textColor">Reward</span>
        </h2>
        {/* <p className="font-montserrat text-white text- ">
          Highlight of the prizes or reward for winners and for Participants
        </p> */}
        </div>
        <div className="flex justify-center items-center">
            <div className="basis-2/4">
                <div className="w-5/6 mx-auto">
                <img src={Trophy} alt="" className="w-full" />
                </div>
            </div>
            <div className="basis-2/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
