import { useState } from "react";
import {
  FaFileAlt,
  FaLaptopCode,
  FaLinkedin,
  FaBriefcase,
  FaPenFancy,
  FaMicrophone,
  FaChartLine,
  FaTools,
  FaEnvelope,
  FaBullseye
} from "react-icons/fa";
import { toast } from "react-toastify";

const Cards = ({data,setcountNumber,countNumber}) => {
         const icons = {
  FaFileAlt,
  FaLaptopCode,
  FaLinkedin,
  FaBriefcase,
  FaPenFancy,
  FaMicrophone,
  FaChartLine,
  FaTools,
  FaEnvelope,
  FaBullseye
};

const IconComponent = icons[data.icon];
    const [isBuy,setisBuy]= useState();

    const BuyBtn =()=>{
       setcountNumber ([...countNumber,data])
        setisBuy(true);
        toast.success(`${data.name} Is Buy`)

    }
    const getTagStyle = (tag) => {
  switch (tag) {
    case "new":
      return "bg-[#DBFCE7] text-[#0A883E]";
    case "best seller" :
      return "bg-[#FEF3C6] text-[#BB4D00]";
    case "popular":
      return "bg-[#E1E7FF] text-[#4F39F6]";
    default:
      return "bg-gray-200";
  }
};
    return (
        <div className=' '>
                <div className="card w-80 h-99 bg-[#f6f8fc] shadow-lg border border-base-300 ">
                    <div className="card-body">
                        <span className={`w-22 p-1 ml-45 font-bold text-center rounded-3xl ${getTagStyle(data.tag)}`}>{data.tag}</span>
                        
                       
                        <IconComponent />
                        
                            <h2 className="text-3xl font-bold">{data.name}</h2>
                            <p className='text-[#627382] text-[12px]'>{data.description}</p>
                            <span className="text-xl font-bold">${data.price}/{data.period}</span>

                        <ul className="mt-2 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{data.features[0]}</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{data.features[1]}</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{data.features[2]}</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-3xl"
                            onClick={BuyBtn}
                            disabled={isBuy}
                            >{isBuy?'Already Buy':'Buy Now'}</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Cards;