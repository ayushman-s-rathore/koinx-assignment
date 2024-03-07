import { CryptoCoinContextProvider } from "./context/CryptoCoinContext";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <CryptoCoinContextProvider>
      <LandingPage />
    </CryptoCoinContextProvider>
  );
};

export default App;
