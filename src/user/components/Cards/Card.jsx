import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"


function Card( { img, amount, name }) {
    // const[loader,setLoader]=useState(false)

    //  useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoader(true)
    //     },55)
    //  },[])
  return (
    <>
    
    <div className="shadow-2xl px-5 hover:scale-125 transition duration-1000">
    

        <div>
            <img className="  h-[180px] " src={img} alt="" />
        </div>
        <hr />
        <div className="font-bold text-[15px] ">
            <p >{name} <span className=""> <br /> {amount}</span> </p>
        </div>
        <div>
            <button className="bg-green-900 hover:bg-green-800 px-16 rounded text-white py-2 mt-3">Add to cart</button>
        </div>
    </div>

</>
  )
}

export default Card