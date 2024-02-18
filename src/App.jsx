import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./Sections/Footer";
import SectionStake from "./Sections/SectionStake";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <div className="mb-8 mt-8">
          <Banner />
        </div>
        <div>
          <SectionStake />
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}

export default App;
