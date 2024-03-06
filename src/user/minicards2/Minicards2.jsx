
import { IoIosArrowForward } from "react-icons/io";

function Minicards2({style,icon,para,para1,para2}) {
    return (

        <div className={`my-2  justify-between  animate-wiggle  ${style} w-60 h-[14vh]   gap-3 rounded-2xl max-[879px]:h-[18vh]`}>
            <div className="flex pt-2  gap-2 ps-3 font-bold">
                <span className="text-[25px] pt-2 ">{icon}</span>
                <p className="text-[25px]">{para}</p>
            </div>
            <div className="">
                <span className="ps-12 font-bold text-[18px]">
                    {para2}
                </span>
              <p className="ps-12 font-bold text-[18px]">{para1}</p>
            </div>
        </div>
    )
}

export default Minicards2



