import React from "react";
import Reg_Image from "../../assets/Images/Reg_image.png";
import Reg1 from "../../assets/Images/Reg1.png";
import Reg2 from "../../assets/Images/Reg2.png";

const Register = () => {
  return (
    <div className="m-0 p-0 bg-colorBg">
      <div className="w-5/6 mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <div className="w-[250px">
            <div className="w-5/6 mx-auto">
              <img src={Reg_Image} alt="" className="w-full" />
            </div>
          </div>
          <div className=" w-sm md:w-[750px] contact my-4">
            <div className="w-5/6 mx-auto">
              <h2 className="font-montserrat text-center md:text-start font-semibold text-2xl text-textColor py-4">
                Register
              </h2>
              <div className="relative text-center gap-2 flex flex-col md:flex-row items-center justify-start md:text-start text-white font-montserrat mb-2">
                <p className="py-4 md:py-0">Be part of this movement</p>{" "}
                <span className="text-textColor pt-4 md:pt-0">
                  ...................................................................
                </span>
                <div className="absolute  top-[60px] md:top-[-16px] right-[90px] flex justify-start items-center">
                  <img src={Reg1} alt="" />
                  <img src={Reg2} alt="" />
                </div>
              </div>
              <p className="text-white text-center md:text-start font-montserrat text-xl uppercase pb-6 font-semibold">
                Create Your Account
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-4">
                <div className="w-[300px]">
                  <label htmlFor="" className="font-montserrat pb-2 text-white">
                    Team's Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 text-white h-full text-sm outline-none border-2 rounded-md bg-transparent"
                    placeholder="Enter Name of Your Group"
                  />
                </div>
                <div className="w-[300px]">
                  <label
                    htmlFor=""
                    className="font-montserrat pb-2 outline-none text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-2 text-white text-sm h-full bg-transparent rounded-md"
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-4">
                <div className="w-[300px]">
                  <label
                    htmlFor=""
                    className="font-montserrat  text-sm pb-2 text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 text-white h-full text-sm outline-none border-2 rounded-md bg-transparent"
                    placeholder="Enter Name of Your Email"
                  />
                </div>
                <div className="w-[300px]">
                  <label
                    htmlFor=""
                    className="font-montserrat pb-2 outline-none text-sm text-white"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-2 text-white text-sm h-full bg-transparent rounded-md"
                    placeholder="Enter your Project Topic"
                  />
                </div>
              </div>

              {/*  */}

              <div className="flex justify-center gap-6 items-center mb-4">
                <div className="w-[190px] md:w-[300px]">
                  <label
                    htmlFor=""
                    className="font-montserrat md:text-sm pb-2 text-white"
                  >
                    Category
                  </label>
                  <select
                    name=""
                    id=""
                    className="bg-transparent w-full text-white outline-none border-2 p-2 font-montserrat text-sm rounded-md"
                  >
                    <option
                      value=""
                      placeholder=""
                      className="w-full text-white text-xs bg-transparent outline-none border-2 p-2 font-montserrat"
                    >
                      Select Your Category
                    </option>
                  </select>
                </div>
                <div className="w-[100px] md:w-[300px]">
                  <label
                    htmlFor=""
                    className="font-montserrat pb-2 text-sm text-white"
                  >
                    Group Size
                  </label>
                  <select
                    name=""
                    id=""
                    className="bg-transparent w-full text-white outline-none border-2 p-2 font-montserrat text-sm rounded-md"
                  >
                    <option
                      value=""
                      placeholder=""
                      className="w-full text-white bg-transparent outline-none border-2 p-2 font-montserrat"
                    >
                      Select
                    </option>
                  </select>
                </div>
              </div>
              <p className="font-montserrat text-[#ff26b9] italics p-4 text-sm">
                Please review your registration details before submtting
              </p>
              <div className="flex items-center justify-start gap-2 pl-2 pb-4">
                <input type="checkbox" className="bg-transparent" />
                <p className="text-white font-montserrat text-xs font-semibold">
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
              <div className="p-4 w-full btnGradient mb-4 cursor-pointer hover:hover hover:border-2 hover:border-textColor text-white font-montserrat text-center">
                Register Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
