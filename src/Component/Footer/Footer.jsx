import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="m-0 pt-12 border-box bg-colorBg">
      <div className=" flex-col md:flex-row flex gap-6 justify-start md:justify-between md:items-center ml-12 mr-12 py-6">
        <div className="[350px] md:w-[400px]">
          <h2 className="font-clash text-3xl text-white font-bold pb-2">
            get<span className="text-textColor">linked</span>
          </h2>
          <p className="text-white font-montserrat pb-2 text-lg text-justify">
            Getlinked Tech Hackathon is a technology innovation program{" "}
            established by a group of organization with the aim of showcasing
            young and talented individual in the field of technology
          </p>
          <a href="" className="font-montserrat text-white">
            Terms of use{" "}
            <span className="text-lg text-textColor font-semibold"> | </span>
            privacy policy
          </a>
        </div>
        <div className="w-grow">
          <h3 className="font-clash font-semibold text-xl text-textColor pb-2">
            Useful Links
          </h3>
          <ul className="text-white font-clash cursor-pointer pb-2">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <div className="flex justify-start items-center gap-2">
            <p className="text-textColor font-clash font-semibold">Follow Us</p>
            <div className="flex gap-2 text-white cursor-pointer">
              <FaInstagram />
              <RiTwitterXLine />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="w-grow">
          <h3 className="font-clash font-semibold text-textColor text-xl pb-2">Contact Us</h3>
          <div className="flex justify-start items-center gap-4 text-white font-clash mb-4">
            <LuPhoneCall />
            <p>+234 9123456789</p>
          </div>
          <div className="flex justify-start items-start gap-4 text-white font-clash">
            <MdLocationPin />
            <p>
              27,Alara Street <br />
              Yaba, 100123, <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
