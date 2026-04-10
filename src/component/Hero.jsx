import Bannar from '../assets/banner.png'
const Hero = () => {
    return (
        <div className=" m-5 lg:flex  w-10/12 mx-auto justify-between items-center  ">
            <div className='space-y-4 my-20  '>
                <p className='border rounded-3xl text-center w-70 text-[#9514FA] bg-[#E1E7FF]'> New: AI-Powered Tools Available</p>

                <h2 className='font-bold text-6xl line-space-4'>Supercharge Your <br /> Digital Workflow</h2>

                <p>Access premium AI tools, design assets,<br/> templates, and productivity
                software—all<br/> in one place. Start creating faster today. <br/>Explore Products
                </p>
                <div className='space-x-2'>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Explore Products</a>

                    <a className="btn btn-outline border-[#4F39F6] rounded-3xl">Watch Demo</a>
                </div>

            </div>

            <div className=''>
                <img className='h-120 shadow-lg  border-base-300' src={Bannar} alt="" />
                
            </div>
        </div>
    );
};

export default Hero;