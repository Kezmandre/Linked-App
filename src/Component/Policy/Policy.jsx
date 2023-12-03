import React from "react";
import List from "../../assets/Images/list.png";
import Lock from "../../assets/Images/lock.png";
import Toplock from "../../assets/Images/Toplock.png"
const Policy = () => {
  return (
    <div className="m-0 pt-12 pb-16 bg-colorBg">
      <div className="w-5/6 mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 items-center">
          <div className="w-sm md:basis-2/4">
            <p className="font-montserrat text-center md:text-start text-2xl font-semibold text-white py-6">
              Privacy Policy and <br />{" "}
              <span className="text-textColor">Terms</span>
            </p>
            <p className="text-white text-center md:text-start pb-4">
              Last updated on september 12, 2023
            </p>
            <p></p>
            <p className="text-white text-center md:text-start text-lg pb-6">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <div className="w-full privacy">
              <p className="p-6 text-white">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <h3 className="pl-6 pb-2 font-montserrat font-semibold text-textColor text-2xl">
                Licensing Policy
              </h3>
              <p className="pl-6 pb-4 font-montserrat font-semibold text-white">
                Here are terms of our Standard License:
              </p>
              <div className="flex justify-start items-start pb-6 ml-6 gap-4">
                <img src={List} alt="" />
                <p className="font-montserrat text-white">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex justify-start items-start pb-6 ml-6 gap-4">
                <img src={List} alt="" />
                <p className="font-montserrat text-white">
                  You are licensed to use the item available at any free source
                  sites, for your project development
                </p>
              </div>
              <div className="w-[200px] mx-auto p-4 mb-8 cursor-pointer btnGradient text-white text-center">
                Read More
              </div>
            </div>
          </div>
          <div className="w-sm md:basis-2/4 pb-14 md:pb-0">
            <div className="w-5/6 h-full relative mx-auto">
              <img src={Lock} alt="" className="w-full" />
              <div className="absolute bottom-[-120px] right-16">
                <img src={Toplock} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
