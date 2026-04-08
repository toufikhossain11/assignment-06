import React, { use, useState } from 'react';
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
import CartCard from './CartCard';


const Cardsection = ({Datas,setcountNumber,countNumber}) => {
    const data = use(Datas);
    const [selectbtn, setselectbtn] = useState('products')
    // console.log(data)
    return (
        <div className='w-11/12 mx-auto py-10 space-y-7  '>
            <div className=' text-center  space-y-3 grid  justify-center items-center '>
                <h2 className='font-extrabold text-4xl'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-[13px]'>Choose from our curated collection of premium <br /> digital products designedto boost your productivity and creativity.</p>
                <div className=' '>
                    <button
                        onClick={() => setselectbtn('products')}
                        className={`btn ${selectbtn === 'products' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}  rounded-r-none rounded-l-3xl`}>Products</button>
                    <button
                        onClick={() => setselectbtn('cart')}
                        className={`btn ${selectbtn === 'cart' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}  rounded-l-none rounded-r-3xl`} >Cart ({countNumber.length})</button>
                   
                </div>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center lg:mx-20'>
                {selectbtn === 'products' ?
            data.map(d=><Cards key={d.id} data={d} setcountNumber={setcountNumber} countNumber={countNumber}></Cards>): <CartCard></CartCard>}
            </div>

        </div>
    );
};

export default Cardsection;