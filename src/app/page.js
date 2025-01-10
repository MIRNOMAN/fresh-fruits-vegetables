import Products from "../components/ui/Products.jsx";
import Header from "../components/shared/Header.jsx";
import AboutUs from "../components/ui/AboutUs.jsx";


export default function Home() {
  return (
    <div className="bg-white">
   <Header/>
   <Products/>
   <AboutUs/>
    </div>
  );
}
