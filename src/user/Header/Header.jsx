

import { FaHeart, FaSearch } from "react-icons/fa";

import { FaCartShopping } from "react-icons/fa6";
// import { IoPersonSharp } from "react-icons/io5";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";



function Header() {
  return (
    <div className="flex  justify-between h-[150px] px-36  mt-0 items-center bg-white">
        {/* ḷet side */}
       <div className="w-[90px]  ">
         <img className="w-full h-full object-cover" src="./public/images/draw_svg20210625-19886-u8ghol.svg-removebg-preview.png" alt="" />
       </div>
       {/* left  */}


       {/* right side */}
       <div className="border py-0  rounded-lg max-[1000px]:hidden items-center ">
        <div className=" flex justify-center items-center">
            <div className="ms-4 text-green-700 font-bold">  All Categories</div>
            <span className=" bg-black w-[3px] h-[20px] ms-3"></span>
            <input placeholder="search medicines,medical products" className="ps-3 bg-transparent outline-none text-black" type="text" />
           
            <div className="ms-[300px] bg-green-700 px-5 py-5 rounded">
            <FaSearch />
            </div>
        </div>
       </div>
        {/* right side */}


      


        {/* last section */}
       {/* <div className="md:flex   text-slate-600 gap-0 md:gap-5 text-[30px]">
         <div className="">
         <CiHeart />
         </div>
         <div className="">
         <FiShoppingCart />

        

         </div>
         <div className=""><CgProfile /></div>
       </div> */}
       {/* <div className="md:hidden  block bg-green-50 gap-0 md:gap-5">
         <div className="">
          <FaAcquisitionsIncorporated/>
         </div>
         <div className="">
          <FaAccusoft/>
         </div>
         <div className=""><FaDatabase/></div>
       </div> */}

<div className="flex">
  <Link to="wishlist">   <a href="#" className="hover:text-black text-green-900"><FaHeart className="w-8" /></a></Link>
           
              <span className="mx-2">|</span>
              <Link to="cart"><a href="#" ><FaCartShopping className="w-8 hover:text-black text-green-900"/></a></Link>
              
              <span className="mx-2">|</span>
              {/* <a href="#" className=""><IoPersonSharp  className="w-8 hover:text-black text-green-900" /></a> */}
              <Dropdown/>
            </div>
       
       {/* last section */}
    </div>
  )
}

export default Header