import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import SectionStake from "./Sections/SectionStake"


function App() {


  return (
    <>
<Navbar/>
<div className=" mt-4">
  <Banner/>
</div>
<div>
  <SectionStake/>
</div>
    </>
  )
}

export default App
