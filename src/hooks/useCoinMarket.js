import { useEffect, useState } from "react";
import axios from "axios";

const useCoinMarket = () => {
  const [coinMarketDetail, setCoinMarketDetail] = useState([]);

  
  useEffect(() => {
    const fetchCoinMarket = async () => {
     
       
       await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
    .then((res) => {
      const data = res.data.bitcoin;
      // console.log('response',res.data.bitcoin);
      setCoinMarketDetail(data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  
      
    };

    fetchCoinMarket();
  }, []);

  return { coinMarketDetail };
};

export default useCoinMarket;
