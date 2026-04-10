
import { BsCart2 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";


const Navbar = ({countNumber}) => {
    return (
        <div className="w-11/12 mx-auto shadow-md border border-base-300">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <li ><a >Products</a></li>
                            <li>
                                <a>Features</a> </li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li ><a >FAQ</a></li>
                        </ul>
                    </div>
                    <a className=" font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl cursor-pointer">Digitools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-[16px]">Products</a></li>
                        <li>
                            <a className="text-[16px]">Features</a> </li>
                        <li><a className="text-[16px]">Pricing</a></li>
                        <li><a className="text-[16px]">Testimonials</a></li>
                        <li><a className="text-[16px]">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="relative">
                        <a  ><BsCart2 /></a>
                        {countNumber.length>0 &&<p className="rounded-full bg-red-600 absolute -top-2 left-2 text-amber-100 w-3 h-4 text-[12px] text-center">{countNumber.length}</p>}
                    </div>
                    <a className="font-bold">Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;