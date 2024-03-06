// import { FaArrowRight } from "react-icons/fa"


function Offer2() {
  return (
   <>
   <div className='bg-blue-50 flex  items-center justify-around flex-col sm:flex-row mt-3'>


    <div>
        <p>Todays hot offer</p>
        <h1 className='text-4xl font-bold mt-1'>unlock 50% off on <br /> essential medicines!</h1>
        <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Delectus esse qui modi accusantium blanditiis quae dolor <br /> doloremque excepturi repellendus, labore sunt aspernatur <br /> </p>
        {/* <button className="mt-4 bg-amber-900 text-white px-5 py-3 rounded flex">Place an order now <FaArrowRight className="ms-2 mt-1.5"/></button> */}
        <button className="button mt-4 bg-green-900 text-white px-5 py-3 rounded  animate-pulse  "><span>Place a order now</span></button>
       
</div>

<div>
  <img src="/public/images/Screenshot_2024-03-01_200117-removebg-preview.png" alt="" />
</div>


   </div>
   
   
   
   </>
  )
}

export default Offer2