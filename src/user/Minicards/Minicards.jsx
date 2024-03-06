
import { IoIosArrowForward } from "react-icons/io";

function Minicards({style,icon,para,para1}) {
    return (

        <div className={`my-2  justify-between    flex ${style} w-60 h-[11vh] text-[20px] font-bold gap-3 rounded-2xl max-[879px]:h-[18vh]`}>
            <div className="flex pt-2 gap-5 ps-2 ">
                <span className="pt-4 text-[25px] ">{icon}</span>
                <p>{para} <span> <br />{para1}</span></p>
            </div>
            <div className="">
                <span><IoIosArrowForward className="mt-6  sm:mt-8" /></span>
            </div>
        </div>
    )
}

export default Minicards



