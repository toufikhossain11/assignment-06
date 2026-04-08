import React, { use } from 'react';
import Cards from './Cards';
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


const Cardsection = ({Datas}) => {
    const data = use(Datas);
    console.log(data)
    return (
        <div className='w-11/12 mx-auto py-10 space-y-7  '>
            <div className=' text-center  space-y-3'>
                <h2 className='font-extrabold text-4xl'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-[13px]'>Choose from our curated collection of premium <br /> digital products designedto boost your productivity and creativity.</p>
                <div className='space-x-2'>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Products</a>

                    <a className="btn btn-outline border-[#4F39F6] rounded-3xl">Cart (2)</a>
                </div>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center lg:mx-20'>
                {
                data.map(d=><Cards key={d.id} data={d}></Cards>)
            }
            </div>

        </div>
    );
};

export default Cardsection;