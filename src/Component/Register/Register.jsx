import React from "react";
import Reg_Image from "../../assets/Images/Reg_image.png";
import Reg1 from "../../assets/Images/Reg1.png";
import Reg2 from "../../assets/Images/Reg2.png";

const Register = () => {
  return (
    <div className="m-0 p-0 bg-colorBg">
      <div className="w-5/6 mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-[250px">
            <div className="w-5/6 mx-auto">
              <img src={Reg_Image} alt="" className="w-full" />
            </div>
          </div>
          <div className="w-[700px] contact">
            <div className="w-5/6 mx-auto">
              <h2 className="font-montserrat font-semibold text-2xl text-textColor py-4">
                Register
              </h2>
              <div className="relative text-white font-montserrat mb-2">
                Be part of this movement{" "}
                <span className="text-textColor">
                  ...................................
                </span>
                <div className="absolute top-[-16px] right-20 flex justify-start items-center">
                  <img src={Reg1} alt="" />
                  <img src={Reg2} alt="" />
                </div>
              </div>
              <p className="text-white font-montserrat text-xl uppercase pb-6 font-semibold">
                Create Your Account
              </p>
              <div className="flex justify-center gap-2 items-center mb-4">
                <div className="w-sm md:grow">
                  <label htmlFor="" className="font-montserrat pb-2 text-white">
                    Team's Name
                  </label>
                  <input
                    type="text"
                    className="w-[200px] p-2 text-white h-full text-sm outline-none border-2 rounded-md bg-transparent"
                    placeholder="Enter Name of Your Group"
                  />
                </div>
                <div className="w-sm md:grow">
                  <label
                    htmlFor=""
                    className="font-montserrat pb-2 outline-none text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-[200px] p-2 border-2 text-white text-sm h-full bg-transparent rounded-md"
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2 items-center mb-4">
                <div className="w-sm md:grow">
                  <label htmlFor="" className="font-montserrat  text-sm pb-2 text-white">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="w-[200px] p-2 text-white h-full text-sm outline-none border-2 rounded-md bg-transparent"
                    placeholder="Enter Name of Your Email"
                  />
                </div>
                <div className="w-sm md:grow">
                  <label
                    htmlFor=""
                    className="font-montserrat pb-2 outline-none text-sm text-white"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    className="w-[200px] p-2 border-2 text-white text-sm h-full bg-transparent rounded-md"
                    placeholder="Enter your Project Topic"
                  />
                </div>
              </div>
              {/* <div className="flex justify-center gap-4 items-center mb-4">
                <div className="w-sm md:grow">
                  <label htmlFor="" className="font-montserrat pb-2 text-white">
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-[200px] p-2 text-white h-full text-sm outline-none border-2 rounded-md bg-transparent"
                    placeholder="Enter Name of Your Email"
                  />
                </div>
                <div className=" w-sm md:grow">
                  <label
                    htmlFor=""
                    className="font-montserrat pb-2 outline-none text-white"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    className="w-[200px] p-2 border-2 text-sm text-white h-full bg-transparent rounded-md"
                    placeholder="Enter your Project Topic"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
