import Navbar from "./navbar"
import Header from "./header";
import Hero from "./hero";
import Aksiya from "./aksiya.jsx";
import New from "./new.jsx";
import Famous from "./famous.jsx";
const App = () => {
  return <div className="w-full">
    <Header/>
    <Navbar />
    <Hero />
    <Aksiya />
    <New />
    <Famous />
  </div>
}

export default App