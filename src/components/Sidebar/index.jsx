import sidebarImage from "../../assets/Tax-rafiki.png";
import { FaArrowRightLong } from "react-icons/fa6";
import TrendingSidebar from "./TrendingSidebar";
const Sidebar = () => {
  return (
    <div className="sidebar xs:mt-4 xs:mx-4 xl:mt-28 ">
      <div className="bg-[#0052fe] text-white px-6 py-10 flex flex-col items-center gap-3 md:max-w-sm rounded-lg">
        <h2 className="text-center text-xl font-bold leading-9">
          Get Started with KoinX <br /> for FREE
        </h2>
        <p className="text-xs text-center font-light leading-6 w-3/4">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src={sidebarImage} alt="Tax Calculator" className="w-36" />
        <button className="bg-white text-black px-4 py-3 rounded-lg font-bold text-sm flex items-center gap-2 shadow-md shadow-blue-700">
          Get Started for FREE <FaArrowRightLong />
        </button>
      </div>
      <TrendingSidebar />
    </div>
  );
};

export default Sidebar;
