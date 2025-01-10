
import Image from "next/image";
import bg from "../../../src/assets/Bg.png"
import offers from "../../../src/assets/Special Offer.png"
import icons from "../../../src/assets/Clip path group.png"
import download_App from "../../../src/assets/Download App_.png"


const Header = () => {
    return (
        <div
        className=" bg-cover bg-center  md:h-[880px]  md:w-[1380px] w-[315px] overflow-hidden"
        style={{ backgroundImage: `url(${bg.src})` }}
    >
        <div className="text-black md:pt-32 pt-20">
            <div className="md:pl-20 pl-4">
            <h3 className="md:text-lg text-xs font-bold text-[#749B3F] border md:w-[250px] w-[160px] text-center rounded-lg bg-gray-200">Welcome to Fresh Harvest</h3>
            <h1 className="md:mt-8 mt-4 md:text-7xl font-bold text-3xl text-[#212337]">Fresh Fruits and </h1>
            <h1 className="md:mt-4 mt-2 md:text-7xl text-3xl font-bold  text-[#212337]" >Vegetables</h1>
            <p className="text-sm  text-[#4A4A52]  md:w-[460px] mt-8">At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
            <button className="btn btn-active md:px-8 px-5 bg-[#FF6A1A] text-white font-bold mt-7">Shop Now</button>
            </div>
            <div className="flex gap-10 md:mt-7 md:pl-44">
                <Image src={icons} width={80} height={20} alt="icon picture" className="hidden md:block"  />  
                <Image 
                    src={offers} 
                    alt="offer picture" 
                    className="md:h-[200px] h-[80px] md:w-[300px] w-[160px] p-2" 
                    />
            </div>
            <div className="md:pl-20 md:mt-8 mt-4 mb-7">
            <Image src={download_App} className="md:h-[100px] h-[80px] md:w-[300px] w-[260px] p-2"  alt="offer picture"/>
            </div>
       
        </div>
    </div>
    );
};

export default Header;