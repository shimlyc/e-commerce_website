

// function News() {
//     return (
//         <div className="flex justify-center item-center w-[80%]  m-36 gap-5 md:flex-row flex-col">
//             <div className="h-[50vh]"> 

//                 <img className="w-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5i--YXaxt0Z4wuGTah6MocBkq-qI0WYX2g&usqp=CAU" alt="" />
//                 <button className="bg-amber-800 text-white rounded mt-3">doctor</button>
//                 <h1 className="font-bold text-2xl font-serif mt-3">In this section we delve into,<br />various aspects of health</h1>
//                 <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur  <br />consectetur adipisicing </p>
//                 <button className="bg-amber-800 text-white  rounded px-3 mt-3 py-2">read more</button>


//             </div>
//             {/* right side */}
//             <div className="">
//                 <div className="flex gap-5 ">

//                     <div>
//                         <img className="w-[230px] rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCqQXyVIm_QGJdJl45kAso3CrNDfe4EHIEQ&usqp=CAU" alt="" />
//                     </div>
//                     <div className=" h-fit border">
//                     <button className="bg-amber-800 text-white rounded mt-3 text-[12px] px-1">doctor</button>
//                 <h1 className="font-bold text-1xl font-serif ">In this section we delve into,<br />various aspects of health</h1>
//                 <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur   </p>
//                 <button className="bg-amber-800 text-white  rounded px-3 mt-3 py-0.5 text-[15px] mb-1">read more</button>
//                     </div>
//                 </div>
//                 <div className="flex gap-5 mt-2">

//                     <div>
//                         <img className="w-[230px] rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCqQXyVIm_QGJdJl45kAso3CrNDfe4EHIEQ&usqp=CAU" alt="" />
//                     </div>
//                     <div className="border h-fit">
//                     <button className="bg-amber-800 text-white rounded mt-3 text-[12px] px-1">doctor</button>
//                 <h1 className="font-bold text-1xl font-serif">In this section we delve into,<br />various aspects of health</h1>
//                 <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur   </p>
//                 <button className="bg-amber-800 text-white  rounded px-3 mt-3 py-0.5 text-[15px] mb-1">read more</button>
//                     </div>

//                 </div>
//                 <div className="flex gap-5 mt-2">


//                     <div>
//                         <img className="w-[230px] rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCqQXyVIm_QGJdJl45kAso3CrNDfe4EHIEQ&usqp=CAU" alt="" />
//                     </div>
//                     <div className="border h-fit">
//                     <button className="bg-amber-800 text-white rounded mt-3 text-[12px] px-1">doctor</button>
//                 <h1 className="font-bold text-1xl font-serif">In this section we delve into,<br />various aspects of health</h1>
//                 <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur   </p>
//                 <button className="bg-amber-800 text-white  rounded px-3 mt-3 py-0.5 text-[15px] mb-1">read more</button>
//                     </div>
//                 </div>


//             </div>

//         </div>


//     )
// }

// export default News

function News() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] h-auto md:h-[60vh] m-5 md:m-36 gap-5  ">
            {/* Left side */}
            <div className="w-full md:w-1/2">
                <div className="max-w-md">
                    <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5i--YXaxt0Z4wuGTah6MocBkq-qI0WYX2g&usqp=CAU" alt="" />
                    <button className="bg-green-800 text-white rounded mt-3">doctor</button>
                    <h1 className="font-bold text-2xl font-serif mt-3">In this section we delve into,<br />various aspects of health</h1>
                    <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur  <br />consectetur adipisicing </p>
                    {/* <button className="bg-amber-800 text-white rounded px-3 mt-3 py-2">read more</button> */}
                    <div id="container">
  <button className="learn-more">
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">read more</span>
  </button>
</div>
    </div>
                </div>
            
            
            {/* Right side */}
            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <div className="flex gap-5">
                    <img className="w-[200px] rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCqQXyVIm_QGJdJl45kAso3CrNDfe4EHIEQ&usqp=CAU" alt="" />
                    <div className="max-w-md border">
                        <button className="bg-green-800 text-white rounded mt-3 text-[12px] px-1">doctor</button>
                        <h1 className="font-bold text-1xl font-serif">In this section we delve into,<br />various aspects of health</h1>
                        <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur   </p>
                        <button className="bg-green-800 text-white rounded px-3 mt-3 py-0.5 text-[15px] mb-1">read more</button>
                    </div>
                </div>
                
                <div className="flex gap-5 mt-2">
                    <img className="w-[200px] rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCqQXyVIm_QGJdJl45kAso3CrNDfe4EHIEQ&usqp=CAU" alt="" />
                    <div className="max-w-md border">
                        <button className="bg-green-800 text-white rounded mt-3 text-[12px] px-1">doctor</button>
                        <h1 className="font-bold text-1xl font-serif">In this section we delve into,<br />various aspects of health</h1>
                        <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur   </p>
                        <button className="bg-green-800 text-white rounded px-3 mt-3 py-0.5 text-[15px] mb-1">read more</button>
                    </div>
                </div>
                
                <div className="flex gap-5 mt-2">
                    <img className="w-[200px] rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCqQXyVIm_QGJdJl45kAso3CrNDfe4EHIEQ&usqp=CAU" alt="" />
                    <div className="max-w-md border">
                        <button className="bg-green-800 text-white rounded mt-3 text-[12px] px-1">doctor</button>
                        <h1 className="font-bold text-1xl font-serif">In this section we delve into,<br />various aspects of health</h1>
                        <p className="text-grey-400 text-[14px] mt-1">Lorem ipsum dolor sit, amet consectetur consectetur <br /> adipisicing adipisicing elit. Quaerat, veritatis amet consectetur   </p>
                        <button className="bg-green-800 text-white rounded px-3 mt-3 py-0.5 text-[15px] mb-1">read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;
