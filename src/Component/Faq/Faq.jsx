import React,{useState} from 'react'
import { faqData } from '../../assets/Data/data';
import Reveal from '../Reveal/Reveal';
import { FaPlus, FaMinus } from "react-icons/fa";
import Faqs from "../../assets/Images/FAQ.png"
const Faq = () => {

    const [answer, setAnswer] = useState({});

    const toggleAnswer = (id) => {
      setAnswer((prevAnswer) => ({
        ...prevAnswer,
        [id]: !prevAnswer[id],
      }));
    };
  return (
    
    <div className="p-0 m-0 bg-colorBg">
    <Reveal>
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
        <img src={Faqs} alt="" className="w-full" />
      </div>
    </div>
    </Reveal>
  </div>
  )
}

export default Faq