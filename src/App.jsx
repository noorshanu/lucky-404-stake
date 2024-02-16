import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./Sections/Footer";
import SectionStake from "./Sections/SectionStake";

function App() {
  return (
    <>
      <Navbar />
      <div className=" mt-4">
        <Banner />
      </div>
      <div>
        <SectionStake />
      </div>
      <div className=" mt-4">
        <Footer/>
      </div>
    </>
  );
}

export default App;
