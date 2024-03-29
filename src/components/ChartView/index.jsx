// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function ChartView() {
  const container = useRef();

  useEffect(
    () => {
        if (!document.getElementById('tradingview-widget-script')){
      const script = document.createElement("script");
      script.id = 'tradingview-widget-script';
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1M"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "fontColor": "rgba(0, 0, 0, 1)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "5d|5",
            "1w|15",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(187, 217, 251, 1)",
          "bottomColor": "rgba(255, 255, 255, 1)"
        }`;
      container.current.appendChild(script);
    }
    },
    []
  );
  
  return (
    <>
    
    
    <div className="tradingview-widget-container " ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
    </>
  );
}

export default memo(ChartView);
