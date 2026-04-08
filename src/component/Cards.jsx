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

const Cards = ({data}) => {
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
    const SubcribeBtn =()=>{

    }
    return (
        <div className=' '>
                <div className="card w-80 h-95 bg-base-100 shadow-lg border ">
                    <div className="card-body">
                        <span className=" w-28 ml-40 font-bold text-center bg-amber-300 rounded-3xl">{data.tag}</span>
                       
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
                            onClick={()=>SubcribeBtn()}
                            >Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Cards;