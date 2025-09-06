import Navbar from "./navbar"
import Header from "./header";
import Hero from "./hero";
import Aksiya from "./aksiya.jsx";
import New from "./new.jsx";
import Famous from "./famous.jsx";
import Footer from "./footer.jsx";
import Shop from "./shop.jsx";

const App = () => {
  return <div className="w-full">
    <Header/>
    <Navbar />
    <Hero />
    <Aksiya />
    <New />
    <Famous />
    <Footer />

    <Header />
    <Navbar />
    <Shop />
    <Aksiya />
    <Footer />
  </div>
}

export default App