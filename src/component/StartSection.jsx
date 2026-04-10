import User from '../assets/user.png'
import Package from '../assets/package.png'
import Rocket from '../assets/rocket.png'

const StartSection = () => {
    return (
        <div className='w-11/12 mx-auto py-10 space-y-14'>
            <div className=' text-center  space-y-3'>
                
                <h2 className='font-extrabold text-4xl'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-[14px]'>Start using premium digital tools in minutes, not hours.</p>

            </div>

            <div className=' grid sm:grid-cols-1 lg:grid-cols-3  gap-5 items-center justify-center lg:ml-28 '>

                <div className=" w-70 shadow-lg border border-base-300 bg-[#f6f8fc] p-5">
                    <p className='text-center rounded-full border  mb-5 ml-50 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-1 font-bold'>01</p>
                <div className="text-center   flex flex-col  items-center space-y-2">
                    <img className='w-18 bg-[#5641725e] rounded-full p-2' src={User} alt="" />
                    <h2 className="text-xl font-bold">Create Account</h2>
                    <p className='text-[#627382] text-[13px]'>Sign up for free in seconds. No credit card required to get started.</p>
                    
                </div>
            </div>
                <div className=" w-70 bg-[#f6f8fc]  shadow-lg border border-base-300 p-5">
                    
                <div className="text-center flex flex-col  items-center space-y-2">
                    <p className='text-center rounded-full border  mb-5 ml-50 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-1 font-bold w-9'>02</p>
                    <img className='w-18 bg-[#5641725e] rounded-full p-2' src={Package} alt="" />
                    <h2 className="text-xl font-bold">Choose Products</h2>
                    <p className='text-[#627382] text-[13px]'>Browse our catalog and select the tools that fit your needs</p>
                    
                </div>
            </div>
                <div className=" w-70 bg-[#f6f8fc]  shadow-lg border border-base-300">
                <div className="text-center p-5  flex flex-col  items-center space-y-2">
                    <p className='text-center rounded-full border  mb-5 ml-50 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-1 font-bold w-9'>03</p>
                    <img className='w-18 bg-[#5641725e] rounded-full p-2 ' src={Rocket} alt=""  />
                    <h2 className="text-xl font-bold">Start Creating</h2>
                    <p className='text-[#627382] text-[13px]'>Download and start using your premium tools immediately.</p>
                    
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default StartSection;