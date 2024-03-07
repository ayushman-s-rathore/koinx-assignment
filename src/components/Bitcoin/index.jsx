import React, { useContext } from 'react'
import { CryptoCoinContext } from '../../context/CryptoCoinContext'
import  btc  from "../../assets/btc.png"
import { PositiveTrend, formatPercentage } from '../../utils'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { BiSolidUpArrow } from 'react-icons/bi';
import clsx from 'clsx';
import ChartView from '../ChartView';

const Bitcoin = () => {
  let { coinMarketDetail } = useContext(CryptoCoinContext)
  if(!coinMarketDetail){
    console.log("error")
  }
  let coinMarket = coinMarketDetail
  let change = coinMarket?.usd_24h_change
  console.log(coinMarket)
  console.log(coinMarket?.usd_24h_change)
 
  return (
    <>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg h-[45rem] xs:w-[90vw]  max-w-5xl mb-6">
        <div className="flex flex-row items-center">
            <img src={btc} alt="" />
            <p className='text-[#0B1426] font-inter text-[1.5rem] font-semibold leading-7 ml-2'>Bitcoin</p>
            <p className='text-[#5D667B] font-inter text-[1rem] font-semibold leading-7 ml-1'>BTC</p>
            <div className='rounded-lg border border-solid border-gray-300 bg-[#808A9D] p-2 ml-8'>
                <p className='text-white font-inter text-base font-medium leading-[126%]'>Rank #1</p>
            </div>
        </div>
        <div className="flex flex-row mt-6 mb-4">
            <div className="flex flex-col">
              <p className='flex items-center text-[#0B1426] font-inter text-2xl font-semibold leading-7'><PiCurrencyDollarBold/> {coinMarket?.usd}</p>
              <p className='flex items-center text-[#0B1426] font-inter text-sm font-medium leading-[1.6875rem]'><LiaRupeeSignSolid/> {coinMarket?.inr} </p>  
            </div>
            {
              <span
                className={clsx(
                  PositiveTrend( change )
                    ? "bg-green-100 text-green-500"
                    : "bg-red-100 text-red-500",
                  `w-20 h-6 text-sm font-medium rounded-md flex items-center justify-center gap-1 ml-6`
                )}
              >
                <BiSolidUpArrow
                  className={clsx(
                    "text-xs",
                    PositiveTrend(
                      change
                    )
                      ? ""
                      : "rotate-180"
                  )}
                />
                {formatPercentage(
                  change
                )}
                %
              </span>
            } 
            <p className='text-[#768396] font-inter text-base font-medium leading-[1.6875rem] ml-2'>(24h)</p>
        </div>
        <hr></hr>
        <ChartView/>

      </div>

    </>
  )
}

export default Bitcoin