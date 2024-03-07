import { H2, H3 } from "../shared/Typography";
import { FaArrowRightLong } from "react-icons/fa6";
import tax from "../../assets/tax.jpg";
import stock from "../../assets/stock.jpg";
const About = () => {
  return (
    <section className="p-6 rounded-lg shadow-lg bg-white max-w-5xl lg:w-screen xs:w-[90vw] my-4">
      <H2 value={"About Bitcoin"} />
      <div className="border-b-slate-600/20 border-b-2">
        <H3 value={"What is Bitcoin?"} />
        <p className="text-sm pb-2">
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="border-b-slate-600/20 border-b-2">
        <H3 value={"How does Bitcoin work?"} />
        <p className="text-sm pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
          ullamcorper eget nulla facilisi etiam dignissim. Ut tristique et
          egestas quis ipsum suspendisse ultrices gravida dictum. Morbi
          tincidunt augue interdum velit euismod.
        </p>
        <p className="text-sm py-2">
          Nisi lacus sed viverra tellus in hac habitasse. Rhoncus aenean vel
          elit scelerisque mauris pellentesque pulvinar pellentesque. Sem
          integer vitae justo eget magna fermentum. Duis ut diam quam nulla.
          Orci eu lobortis elementum nibh tellus molestie. Accumsan sit amet
          nulla facilisi. Vel eros donec ac odio tempor orci dapibus ultrices
          in. Amet justo donec enim diam vulputate ut pharetra sit. Luctus
          accumsan tortor posuere ac ut consequat. Placerat duis ultricies lacus
          sed. Ut sem nulla pharetra diam sit amet. Vel turpis nunc eget lorem
          dolor sed viverra ipsum.
        </p>
        <p className="text-sm pb-3">
          Pellentesque dignissim enim sit amet venenatis. Sapien faucibus et
          molestie ac feugiat. Volutpat odio facilisis mauris sit amet massa
          vitae. Vel turpis nunc eget lorem dolor sed viverra ipsum.
          Pellentesque habitant morbi tristique senectus. Pellentesque elit
          ullamcorper dignissim cras tincidunt lobortis feugiat. Ultrices vitae
          auctor eu augue ut lectus.
        </p>
      </div>

      <div className="flex flex-col pt-3">
        <H2 value={"Already Holding Bitcoin?"} />
        <div className="border-b-slate-600/20 border-b-2 flex gap-6 py-2 flex-wrap md:flex-nowrap">
          <div className="rounded-md w-full hover:shadow-md bg-gradient-to-r from-emerald-400 to-cyan-800  flex gap-6 items-center p-3">
            <img
              src={tax}
              alt="tax-payment"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="max-w-32 flex flex-col gap-2">
              <span className="text-base font-bold text-white ">
                Calculate your Profits
              </span>
              <button className="flex w-fit items-center text-sm font-bold px-3 py-1 tracking-tight gap-2 bg-white rounded-md ">
                Check Now <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="rounded-md w-full hover:shadow-md h-32 bg-gradient-to-r from-orange-500 to-amber-700  flex gap-6 items-center p-3">
            <img
              src={stock}
              alt="liability-pay"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="max-w-40 flex flex-col gap-2">
              <span className="text-base font-bold text-white ">
                Calculate your tax liability
              </span>
              <button className="flex w-fit items-center text-sm font-bold px-3 py-1 tracking-tight gap-2 bg-white rounded-md ">
                Check Now <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <p className="py-3 text-sm">
          Vel turpis nunc eget lorem dolor sed viverra ipsum. Pellentesque
          habitant morbi tristique senectus. Pellentesque elit ullamcorper
          dignissim cras tincidunt lobortis feugiat. Ultrices vitae auctor eu
          augue ut lectus.
        </p>
      </div>
    </section>
  );
};

export default About;
