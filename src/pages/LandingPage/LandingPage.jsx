import Header from "../../layouts/Header";
import Team from "../../components/Team";
import Container from "../../layouts/Container";
import Tokenomics from "../../components/Tokenomics";
import About from "../../components/About";
import Sidebar from "../../components/Sidebar";
import Sentiment from "../../components/Sentiment";
import "./LandingPage.css";
import Performance from "../../components/Performance";
import Redirecter from "../../components/Redirecter";
import Bitcoin from "../../components/Bitcoin";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Footer from "../../layouts/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap relative mx-0">
        <Container>
          <div className="flex flex-row items-center mb-4">
            <p className="text-[#3E5765]  font-inter text-[0.875rem] font-normal mr-1">Cryptocurrencies</p>
            <MdKeyboardDoubleArrowRight />
            <p className="text-[#0F1629] font-inter text-[0.875rem] font-normal ml-1">Bitcoin</p>
          </div>
          <Bitcoin/>
          <Redirecter/>
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </Container>
        <Sidebar className="sidebar" />
      </div>
        <Footer/>
    </>
  );
};

export default LandingPage;
