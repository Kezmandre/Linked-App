import { useState } from "react";
import { Link } from "react-router-dom";
import { navData } from "../../assets/Data/data";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className=" relative m-0 border-box p-4 gradientTwo border-b border-b-[grey]">
        <div className="flex justify-between items-center ">
          <h2 className="font-clash text-3xl font-bold text-white">
            get<span className="text-textColor">linked</span>
          </h2>
          <nav className=" hidden md:flex justify-center items-center gap-5 text-white">
            {navData?.map((item) => {
              return (
                <ul
                  className="text-montserrat cursor-pointer text-xl hover:text-2xl"
                  key={item.id}
                >
                  <Link to={item.path}>
                    <li>{item.title}</li>
                  </Link>
                </ul>
              );
            })}
          </nav>
          <button className="hidden w-[150px] shadow p-[6px] rounded-mx text-white btnGradient hover:p-[8px] md:block">
            Register
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <BiMenuAltRight
            onClick={showToggle}
            className=" text-white text-4xl cursor-pointer md:hidden"
          />
        </div>
      </div>
      {toggle ? (
        <div className="md:hidden fixed w-screen h-screen top-0 right-0 bg-[#150e28] duration-[950ms] z-90">
          <div className=" absolute top-4 right-4">
            <ImCancelCircle
              onClick={showToggle}
              className="text-3xl text-white cursor-pointer"
            />
          </div>
          <div className="m-10 text-white w-1/2" onClick={showToggle}>
            {navData?.map((item) => {
              return (
                <ul
                  className="text-montserrat p-4 cursor-pointer text-xl hover:text-2xl"
                  key={item.id}
                >
                  <Link to={item.path}>
                    <li>{item.title}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
          <button className="w-[150px] m-10 shadow p-[6px] rounded-mx text-white btnGradient hover:p-[8px] md:block">
            Register
          </button>
        </div>
      ) : (
        <div className="duration-[350ms] right-[-100%]">{""}</div>
      )}
    </>
  );
};

export default Header;
