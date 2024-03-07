import { IoMdInformationCircle } from "react-icons/io";
import { H2, H3 } from "../shared/Typography";
import { RiArrowUpSFill } from "react-icons/ri";

const Performance = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white max-w-5xl lg:w-screen xs:w-[90vw] my-4 ">
      <H2 value={"Performance"} />
      <div className="flex flex-row justify-between gap-x-9 items-center my-4 mb-8">
        <div className="flex flex-col">
          <p className="text-gun-powder font-inter text-sm font-normal leading-5"> Today's Low</p>
          <p className="text-gun-powder font-inter text-l font-medium leading-7">46,930.22</p>
        </div>
        <div className="relative grow">
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-1 w-full"></div>
          <div className="flex flex-col items-center absolute right-8 sm:right-4 xs:right-0">
           <RiArrowUpSFill/>
           <p className="text-gray-700  font-Inter text-sm font-normal mt-0">$48,637.83</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gun-powder font-inter text-sm font-normal leading-5">Today's High</p>
          <p className="text-gun-powder font-inter text-l font-medium leading-7">49,930.83</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-14 items-center my-4">
        <div className="flex flex-col">
          <p className="text-gun-powder font-inter text-sm font-normal leading-5">52W Low</p>
          <p className="text-gun-powder font-inter text-l font-medium leading-7">16,930.22</p>
        </div>
        <div className="grow">
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-1 w-full"></div>
          
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gun-powder font-inter text-sm font-normal leading-5">52W High</p>
          <p className="text-gun-powder font-inter text-l font-medium leading-7">49,930.83</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <H3 value={"Fundamentals"} />
        <IoMdInformationCircle
          className="h-5 w-5 text-slate-500 cursor-pointer"
          title="Check Key Events"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div>
          <table>
            <tbody>
              <tr className="border-b border-gray-200 h-10 ">
                <td className="w-60 text-gray-600 font-inter text-sm font-medium">
                  Bitcoin Price
                </td>
                <td>$16815</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="text-gray-600 font-inter text-sm font-medium">
                  24h Low / 24h High
                </td>
                <td>$16,382.07 / $16,874.12</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="text-gray-600 font-inter text-sm font-medium">
                  7d Low / 7d High
                </td>
                <td>$16,382.07 / $16,874.12</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="text-gray-600 font-inter text-sm font-medium">
                  Trading Volume
                </td>
                <td>$23,249,202,782</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="text-gray-600 font-inter text-sm font-medium">
                  Market Cap Rank
                </td>
                <td>#1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:mx-10">
          <table>
            <tbody>
              <tr className="border-b border-gray-200 h-10">
                <td className="w-60 text-gray-600 font-inter text-sm font-medium">
                  Market Cap
                </td>
                <td>$323,507,290,047</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="w-60 text-gray-600 font-inter text-sm font-medium">
                  Market Cap Dominance
                </td>
                <td>38.343%</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="text-gray-600 font-inter text-sm font-medium">
                  Volume / Market Cap
                </td>
                <td>0.078</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="text-gray-600 font-inter text-sm font-medium">
                  All-Time High
                </td>
                <td>$69,044</td>
              </tr>
              <tr className="border-b border-gray-200 h-10">
                <td className="text-gray-600 font-inter text-sm font-medium">
                  All-Time Low
                </td>
                <td>$67.81</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Performance;
