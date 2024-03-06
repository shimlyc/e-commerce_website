

// function Offers() {
//     return (
//         <>

//             <div className="flex gap-3    items-center justify-center flex-wrap">
//                 {/* left side */}
//                 <div className="flex flex-col md:flex-row  items-center bg-blue-50 pt-30  rounded h-[65vh] md:w-[600px]">
//                     <div className=" ms-5 ">
//                         <button className="rounded bg-amber-900 text-white px-4 py-2">25% OFF</button>
//                         <h1 className="font-bold text-xl md:text-3xl">BLACK GARLIC OIL</h1>
//                         <p className="text-lg md:text-xl">stronger and thicker <br /> hair with black garlic <br /> oil</p>
//                         <p className="text-base md:text-lg mt-2 "><strike>$47.00</strike></p>
//                         <p className="mt-2">
//                             <span className="font-bold text-[20px]">$37.00</span>
//                             <span className="">   including tax</span>
//                         </p>
//                     </div>
//                     <div className=" ">
//                         <img className="md:w-[500px]" src="/public/images/61fYMIIYvsL.SS700-removebg-preview.png" alt="" />
//                     </div>
//                 </div>
//                 {/* left side end */}

//                <div className="flex flex-col gap-5 md:gap-10">
//                 {/* right side 1st div */}
//                <div className="flex flex-col md:flex-row items-center bg-amber-50 pt-30  rounded h-[30vh] md:w-[500px]">
//                     <div className=" ms-5 w-60">
//                         <button className="rounded bg-amber-900 text-white px-4 py-1">25% OFF</button>
                       
//                         <p className="text-[20px]">stronger and thicker <br /> hair with black garlic <br /> oil</p>
//                         <p className="text-[15px] mt-2"><strike>$47.00</strike></p>
//                         <p className="mt-2">
//                             <span className="font-bold text-[20px]">$37.00</span>
//                             <span className="">   including tax</span>
//                         </p>
//                     </div>
//                     <div className=" ">
//                         <img className="w-[200px]" src="/public/images/741-removebg-preview.png" alt="" />
//                     </div>
//                 </div>
//                 {/* right side 1st end */}

//                 {/* right 2nd */}
//                 <div className="flex  items-center bg-green-50 pt-30  rounded h-[30vh] w-[500px] mt-2">
//                     <div className=" ms-5 w-60">
//                         <button className="rounded bg-amber-900 text-white px-4 py-1">25% OFF</button>
                       
//                         <p className="text-[20px]">stronger and thicker <br /> hair with black garlic <br /> oil</p>
//                         <p className="text-[15px] mt-2"><strike>$47.00</strike></p>
//                         <p className="mt-2">
//                             <span className="font-bold text-[20px]">$37.00</span>
//                             <span className="">   including tax</span>
//                         </p>
//                     </div>
//                     <div className=" ">
//                         <img className="w-[200px]" src="/public/images/bein.png" alt="" />
//                     </div>
//                 </div>
//                 {/* right side 2nd */}
//                </div>

//             </div>




//         </>
//     )
// }

// export default Offers


function Offers() {
    return (
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
            {/* left side */}
            <div className="flex flex-col md:flex-row items-center bg-green-100 rounded-lg w-full md:w-[600px]">
                <div className="m-5">
                    <button className="rounded bg-green-900 text-white px-4 py-2">25% OFF</button>
                    <h1 className="font-bold text-xl md:text-3xl">BLACK GARLIC OIL</h1>
                    <p className="text-lg md:text-xl">stronger and thicker <br /> hair with black garlic <br /> oil</p>
                    <p className="text-base md:text-lg mt-2"><strike>$47.00</strike></p>
                    <p className="text-lg md:text-xl mt-2">
                        <span className="font-bold">$37.00</span>
                        <span>   including tax</span>
                    </p>
                </div>
                <div>
                    <img className="w-full md:w-[500px]" src="/public/images/61fYMIIYvsL.SS700-removebg-preview.png" alt="" />
                </div>
            </div>
            {/* left side end */}

            {/* right side */}
            <div className="flex flex-col gap-5 md:gap-10">
                {/* right side 1st div */}
                <div className="flex flex-col md:flex-row items-center bg-green-200 rounded-lg w-full md:w-[500px]">
                    <div className="m-5">
                        <button className="rounded bg-green-900 text-white px-4 py-1">25% OFF</button>
                        <p className="text-lg md:text-xl">stronger and thicker <br /> hair with black garlic <br /> oil</p>
                        <p className="text-base md:text-lg mt-2"><strike>$47.00</strike></p>
                        <p className="text-lg md:text-xl mt-2">
                            <span className="font-bold">$37.00</span>
                            <span>   including tax</span>
                        </p>
                    </div>
                    <div>
                        <img className="w-full md:w-[200px]" src="/public/images/741-removebg-preview.png" alt="" />
                    </div>
                </div>
                {/* right side 1st end */}

                {/* right 2nd */}
                <div className="flex flex-col md:flex-row items-center bg-green-50 rounded-lg w-full md:w-[500px]">
                    <div className="m-5">
                        <button className="rounded bg-green-900 text-white px-4 py-1">25% OFF</button>
                        <p className="text-lg md:text-xl">stronger and thicker <br /> hair with black garlic <br /> oil</p>
                        <p className="text-base md:text-lg mt-2"><strike>$47.00</strike></p>
                        <p className="text-lg md:text-xl mt-2">
                            <span className="font-bold">$37.00</span>
                            <span>   including tax</span>
                        </p>
                    </div>
                    <div>
                        <img className="w-full md:w-[200px]" src="/public/images/bein.png" alt="" />
                    </div>
                </div>
                {/* right side 2nd */}
            </div>
        </div>
    );
}

export default Offers;
