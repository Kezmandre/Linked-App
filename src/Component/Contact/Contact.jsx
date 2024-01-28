import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="m-0 p-0 bg-colorBg ">
      <div className="w-5/6 mx-auto">
        <div className="w-full flex items-center gap-8 pt-4 pb-4 md:pt-20 justify-center">
          <div className=" hidden md:flex w-[400px]">
            <div className="w-5/6 auto">
              <h2 className="font-montserrat pb-6 text-2xl text-textColor font-semibold">
                Get in touch
              </h2>
              <p className="text-white font-medium font-montserrat pb-2">
                Contact <br />
                Information
              </p>
              <p className="font-montserrat font-medium text-white pb-4">
                27, Alara street <br />
                Yaba 100012 <br />
                Lagos State
              </p>
              <p className="text-white font-montserrat font-medium pb-2">
                Call Us: 07021345697
              </p>
              <p className="text-white font-montserrat font-medium pb-2">
                We are open from Mon-Fri
              </p>
              <p className="text-white font-montserrat font-medium pb-6">
                08.00a.m - 05.00pm
              </p>
              <p className="text-textColor font-montserrat font-medium text-lg pb-2">
                share on
              </p>
              <div className="flex justify-start items-center text-white gap-4">
                <FaInstagram />
                <FaFacebookF />
                <FaLinkedinIn />
                <RiTwitterXLine />
              </div>
            </div>
          </div>
          <div className="w-sm md:grow contact pb-4 md:py-0 md:pb-2">
            <div className="w-5/6 mx-auto">
              <h2 className="font-montserrat text-xl py-6 font-semibold text-textColor">
                Questionnaire or Need Assistance? <br /> Let us know about it
              </h2>
              <div className="w-full flex flex-col items-center pb-12  gap-6 justify-start">
                <input
                  type="text"
                  placeholder="First Name "
                  className="w-full p-2 bg-transparent border outline-none font-montserrat text-white border-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="mail"
                  className="w-full p-2 bg-transparent border outline-none font-montserrat text-white border-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full py-6 px-2 bg-transparent border outline-none font-montserrat text-white border-white rounded-md"
                />
              </div>
              <div className="w-[200px] mb-4 font-medium cursor-pointer p-4 text-white text-center font-montserrat mx-auto  btnGradient rounded-md">
                Submittance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
