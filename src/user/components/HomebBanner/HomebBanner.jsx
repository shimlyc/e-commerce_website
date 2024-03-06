// import { FiShoppingCart } from "react-icons/fi"

// function HomebBanner() {
//     return (
//         <div className=" h-fit-content flex justify-around items-center md:flex-row  flex-col ">
//             <div>
//                 <h1 className="text-[45px] text-white font-bold   ">Your prescription for <br /> affordable health <br /> solutions!</h1>
//                 <p className="text-white mt-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sit beatae eos fugit culpa unde tempore! Quos <br /> placeat veritatis impedit illo?</p>
//                 <button className="bg-white flex gap-2 text-green-900 border-[2px]    border-black-100 p-2 rounded font-bold  mt-5 button1"><span>Start shopping </span></button>
//             </div>
//             <div className="">
//                 <img src="/public/images/pleased-middle-aged-male-doctor-wearing-medical-robe-stethoscope-showing-empty-hands_141793-116515-removebg-preview.png" alt="" />
//             </div>
//         </div>
//     )
// }

// export default HomebBanner


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function HomebBanner() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide> <div className=" h-fit-content flex justify-around items-center md:flex-row  flex-col  ">
         <div>
                 <h1 className="text-[45px] text-white font-bold   ">Your prescription for <br /> affordable health <br /> solutions!</h1>
                 <p className="text-white mt-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sit beatae eos fugit culpa unde tempore! Quos <br /> placeat veritatis impedit illo?</p>
                 <button className="bg-white flex gap-2 text-green-900 border-[2px]    border-black-100 p-2 rounded font-bold  mt-5 button1"><span>Start shopping </span></button>
             </div>
             <div className="">
              <img src="/public/images/pleased-middle-aged-male-doctor-wearing-medical-robe-stethoscope-showing-empty-hands_141793-116515-removebg-preview.png" alt="" />
             </div>
         </div></SwiperSlide>
        <SwiperSlide><div className=" h-fit-content flex justify-around items-center md:flex-row  flex-col ">
         <div>
                 <h1 className="text-[45px] text-white font-bold   ">Your prescription for <br /> affordable health <br /> solutions!</h1>
                 <p className="text-white mt-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sit beatae eos fugit culpa unde tempore! Quos <br /> placeat veritatis impedit illo?</p>
                 <button className="bg-white flex gap-2 text-green-900 border-[2px]    border-black-100 p-2 rounded font-bold  mt-5 button1"><span>Start shopping </span></button>
             </div>
             <div className="">
              <img src="/public/images/pleased-middle-aged-male-doctor-wearing-medical-robe-stethoscope-showing-empty-hands_141793-116515-removebg-preview.png" alt="" />
             </div>
         </div></SwiperSlide>
        <SwiperSlide><div className=" h-fit-content flex justify-around items-center md:flex-row  flex-col ">
         <div>
                 <h1 className="text-[45px] text-white font-bold   ">Your prescription for <br /> affordable health <br /> solutions!</h1>
                 <p className="text-white mt-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sit beatae eos fugit culpa unde tempore! Quos <br /> placeat veritatis impedit illo?</p>
                 <button className="bg-white flex gap-2 text-green-900 border-[2px]    border-black-100 p-2 rounded font-bold  mt-5 button1"><span>Start shopping </span></button>
             </div>
             <div className="">
              <img src="/public/images/pleased-middle-aged-male-doctor-wearing-medical-robe-stethoscope-showing-empty-hands_141793-116515-removebg-preview.png" alt="" />
             </div>
         </div></SwiperSlide>
        <SwiperSlide><div className=" h-fit-content flex justify-around items-center md:flex-row  flex-col ">
         <div>
                 <h1 className="text-[45px] text-white font-bold   ">Your prescription for <br /> affordable health <br /> solutions!</h1>
                 <p className="text-white mt-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sit beatae eos fugit culpa unde tempore! Quos <br /> placeat veritatis impedit illo?</p>
                 <button className="bg-white flex gap-2 text-green-900 border-[2px]    border-black-100 p-2 rounded font-bold  mt-5 button1"><span>Start shopping </span></button>
             </div>
             <div className="">
              <img src="/public/images/pleased-middle-aged-male-doctor-wearing-medical-robe-stethoscope-showing-empty-hands_141793-116515-removebg-preview.png" alt="" />
             </div>
         </div></SwiperSlide>
       
      </Swiper>
    </>
  );
}
