import React, { useContext } from "react";
import { CryptoCoinContext } from "../context/CryptoCoinContext";
import { PositiveTrend, formatPercentage } from "../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { BiSolidUpArrow } from "react-icons/bi";



const Footer = () => {
  const { trendingCoins } = useContext(CryptoCoinContext);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings:{
                infinite: true,
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
            } 
        },{
            breakpoint: 770,
            settings:{
                infinite: true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
            } 
        },{
            breakpoint: 590,
            settings:{
                infinite: true,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            } 
        }
    ]
   
  };
//   console.log(trendingCoins);
  return (
    <>
      <div className="bg-white py-12 flex flex-col mt-8 px-10 w-screen">
        <p className="text-mine-shaft font-inter text-xl font-semibold leading-9">
          You May Also Like
        </p>
        <Slider {...settings}>
          {trendingCoins.map((coin) => (
            <div
              key={coin.item.id}
              className="flex rounded-lg border border-solid border-mercury flex-col px-4 pt-4 mx-1"
            >
              <div className="flex flex-row gap-1 w-40">
                <img
                  src={coin?.item.small}
                  className="h-5 w-5 object-contain"
                />
                <span className="text-sm uppercase font-semibold tracking-tight">
                  {coin?.item.symbol}
                </span>
                {
                  <span
                    className={clsx(
                      PositiveTrend(
                        coin?.item.data.price_change_percentage_24h.inr
                      )
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500",
                      ` w-16  text-[0.75rem] font-medium rounded-md flex items-center justify-center gap-1`
                    )}
                  >
                    <BiSolidUpArrow
                      className={clsx(
                        "text-xs",
                        PositiveTrend(
                          coin?.item.data.price_change_percentage_24h.inr
                        )
                          ? ""
                          : "rotate-180"
                      )}
                    />
                    {formatPercentage(
                      coin?.item.data.price_change_percentage_24h.inr
                    )}
                    %
                  </span>
                }
              </div>
              <p className="text-cod-gray font-inter text-lg font-medium leading-6 mt-1">
                {coin?.item.data.price}
              </p>
              <span>
                <img src={coin?.item.data.sparkline}></img>
              </span>
            </div>
          ))}
        </Slider>
        <p className="text-mine-shaft font-inter text-xl font-semibold leading-9">
          Trending Coins
        </p>
        <Slider {...settings} className="mt-2">
          {trendingCoins.map((coin) => (
            <div
              key={coin.item.id}
              className="flex rounded-lg border border-solid border-mercury flex-col px-4 pt-4 mx-1"
            >
              <div className="flex flex-row gap-1 w-40">
                <img
                  src={coin?.item.small}
                  className="h-5 w-5 object-contain"
                />
                <span className="text-sm uppercase font-semibold tracking-tight">
                  {coin?.item.symbol}
                </span>
                {
                  <span
                    className={clsx(
                      PositiveTrend(
                        coin?.item.data.price_change_percentage_24h.inr
                      )
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500",
                      ` w-16  text-[0.75rem] font-medium rounded-md flex items-center justify-center gap-1`
                    )}
                  >
                    <BiSolidUpArrow
                      className={clsx(
                        "text-xs",
                        PositiveTrend(
                          coin?.item.data.price_change_percentage_24h.inr
                        )
                          ? ""
                          : "rotate-180"
                      )}
                    />
                    {formatPercentage(
                      coin?.item.data.price_change_percentage_24h.inr
                    )}
                    %
                  </span>
                }
              </div>
              <p className="text-cod-gray font-inter text-lg font-medium leading-6 mt-1">
                {coin?.item.data.price}
              </p>
              <span>
                <img src={coin?.item.data.sparkline}></img>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Footer;
