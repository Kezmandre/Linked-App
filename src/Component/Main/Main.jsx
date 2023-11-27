import React, { useState } from "react";
import Light from "../../assets/Images/Light.png";
import Guide from "../../assets/Images/guide.png";
import Criteria from "../../assets/Images/criteria.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqData } from "../../assets/Data/data";
import Faq from "../../assets/Images/FAQ.png"
const Main = () => {
  const [answer, setAnswer] = useState({});

  const toggleAnswer = (id) => {
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      [id]: !prevAnswer[id],
    }));
  };
  return (
    <>
      <div className="m-0 p-0 bg-colorBg">
        <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className=" w-sm md:basis-2/4">
            <div className=" relative w-5/6 mx-auto my-8">
              <img src={Light} alt="" className="w-5/6" />
              <p className="absolute top-40 left-[150px]  text-white font-poppins">
                The Big <br />
                Idea!
              </p>
            </div>
          </div>
          <div className=" w-sm md:basis-2/4">
            <div className="w-5/6 mx-auto mt-4">
              <p className="font-montserrat text-2xl md:text-3xl text-center md:text-start text-white font-semibold pb-4">
                Introduction to getlinked
                <span className="text-textColor"> Tech Hackathon 1.0</span>
              </p>
              <p className="font-montserrat text-white text-center md:text-start text-lg md:text-sm">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-0 p-0 bg-colorBg">
        <div className="w-5/6 mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="w-sm md:basis-2/4 my-12">
            <h3 className="font-montserrat text-3xl text-center md:text-start font-semibold text-white pb-4">
              Rules and <br />{" "}
              <span className="text-textColor">Guidelines</span>
            </h3>
            <p className="font-montserrat text-center md:text-start text-white text-lg md:text-sm">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <div className="w-sm md:basis-2/4">
            <div className="w-5/6 mx-auto">
              <img src={Guide} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 m-0 bg-colorBg">
        <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="w-sm md:basis-2/4">
            <div className="w-5/6 mx-auto mt-4 md:my-4">
              <img src={Criteria} alt="" className="w-full h-[500px]" />
            </div>
          </div>
          <div className="w-sm md:basis-2/4 md:my-12 text-center md:text-start">
            <h2 className="font-clash font-semibold text-white text-2xl pb-2">
              Judging Criteria
            </h2>
            <h2 className="font-clash font-semibold text-textColor text-2xl pb-4">
              Key attributes
            </h2>
            <p className="font-montserrat text-white pb-4">
              <span className="text-textColor font-semibold">
                Innovation and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="font-montserrat text-white pb-4">
              <span className="text-textColor font-semibold">
                Functionality:
              </span>{" "}
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p className="font-montserrat text-white pb-4">
              <span className="text-textColor">Impact and Relevance:</span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="font-montserrat text-white pb-4">
              <span className="text-textColor font-semibold">
                Technical Complexity:
              </span>{" "}
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="font-montserrat text-white pb-4">
              <span className="text-textColor font-semibold">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
            <div className="w-[150px] mt-6 mb-8 mx-auto md:mx-0">
              <button className="w-full m-4 shadow p-[8px] rounded-mx text-white btnGradient hover:p-[10px] md:block">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}

      <div id="faqs" className="p-0 m-0 bg-colorBg">
        <div className="w-5/6 mx-auto flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="w-sm md:basis-2/4 mb-6">
            <h2 className="font-montserrat text-3xl text-center md:text-start font-bold text-white pb-2">
              Frequently Ask
            </h2>
            <h2 className="font-montserrat text-3xl text-center md:text-start font-bold text-textColor pb-4">
              Question
            </h2>
            <p className="text-white text-center md:text-start font-montserrat pb-8">
              We got answers to questions that you might want to ask about
              getlinked 1.0
            </p>

            {faqData?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full flex flex-col mb-6 border-b-2 border-b-textColor pb-4 cursor-pointer"
                >
                  <span className="relative mb-2">
                    <p className="text-white text-left text-sm font-montserrat">
                      {item.question}
                    </p>
                    {answer[item.id] ? (
                      <FaMinus className="text-textColor absolute top-16 right-2 md:top-12 md:right-4 z-20" onClick={()=>(toggleAnswer(item.id))} />
                    ) : (
                      <FaPlus className="text-textColor absolute top- right-0" onClick={()=>(toggleAnswer(item.id))} />
                    )}
                  </span>
                  {answer[item.id] && (
                    <span className="relative w-full border rounded-md shadow-2xl bg-white opacity-30  p-4">
                      <p className="text-textColor text-sm ">{item.answer}</p>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="w-sm md:basis-2/4">
            <img src={Faq} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
