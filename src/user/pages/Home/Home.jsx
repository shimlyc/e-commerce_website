import { data1 } from "../../../api/data1";
import { data2 } from "../../../api/data2";
import Card from "../../components/Cards/Card";
import Minicards from "../../Minicards/Minicards";
import HomebBanner from "../../components/HomebBanner/HomebBanner";
import Offers from "../../offers/Offers";
import { FaArrowRight} from "react-icons/fa";
import Minicards2 from "../../minicards2/Minicards2";
import { data3 } from "../../../api/data3";
import Offer2 from "../../offer2/Offer2";
import News from "../../news/News";
// import ListCategories from "../../components/ListCategories/ListCategories";
function Home() {


  return (
    <>
      {/* <div className="mb-4">
    <ListCategories/>
    </div> */}
      <div className=" bg-green-900">
        <HomebBanner />
      </div>


      <div className="flex  sm:flex-wrap mx-0 sm:mx-20 justify-evenly px-5 sm:px-0 sm:my-0 my-10  h-[20vh] pt-7 flex-col lg:flex-row max-[1020px]:h-[65vh]">
        {data2.map((item, index) => <Minicards icon={item.icon} para={item.para} para1={item.para1} style={item.style} key={index} />)}
      </div>


      <div>
        <div className="flex justify-between  mx-20  flex-col md:flex-row">
          <div><h1 className="font-bold text-2xl ms-0 md:ms-20 ">New products </h1></div>
          <div><button className="text-black  font-bold text-[18px] me-20 flex gap-1 mt-1 md:mt-0 "> view all <FaArrowRight className="mt-1.5" />  </button></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 my-5">
          {data1.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
        </div>
      </div>

      <div>
        <div className="flex justify-between  mx-20  flex-col md:flex-row">
          <div><h1 className="font-bold text-2xl ms-0 md:ms-20 ">Popular products </h1></div>
          <div><button className="text-black font-bold text-[18px] me-20 flex gap-1 mt-1 md:mt-0 "> view all <FaArrowRight className="mt-1.5" />  </button></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 my-5">
          {data1.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
        </div>
      </div>





      <Offers />



      <div>
        <div className="flex justify-between  mx-20  flex-col md:flex-row">
          <div><h1 className="font-bold text-2xl ms-0 md:ms-20 ">top products </h1></div>
          <div><button className="text-black font-bold text-[18px] me-20 flex gap-1 mt-1 md:mt-0 "> view all <FaArrowRight className="mt-1.5" />  </button></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 my-5">
          {data1.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
        </div>
      </div>


      <div className="flex  sm:flex-wrap mx-0 sm:mx-20  justify-evenly px-5 sm:px-0 sm:my-0 my-10  h-[20vh] pt-7 flex-col lg:flex-row max-[1020px]:h-[65vh]">
        {data3.map((item, index) => <Minicards2 icon={item.icon} para={item.para} para1={item.para1}  para2={item.para2} style={item.style} key={index} />)}
      </div>


      <div>
        <div className="flex justify-between  mx-20  flex-col md:flex-row">
          <div><h1 className="font-bold text-2xl ms-0 md:ms-20 ">Medical products </h1></div>
          <div><button className="text-black font-bold text-[18px] me-20 flex gap-1 mt-1 md:mt-0 "> view all <FaArrowRight className="mt-1.5" />  </button></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 my-5">
          {data1.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
        </div>
      </div>

      <div>
        <div className="flex justify-between  mx-20  flex-col md:flex-row">
          <div><h1 className="font-bold text-2xl ms-0 md:ms-20 ">upcoming produts </h1></div>
          <div><button className="text-black font-bold text-[18px] me-20 flex gap-1 mt-1 md:mt-0 "> view all <FaArrowRight className="mt-1.5" />  </button></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 my-5">
          {data1.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
        </div>
      </div>

<Offer2/>
{/* <News/> */}
    </>
  )
}

export default Home

