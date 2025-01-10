
import Image from "next/image";
import bg from "../../../src/assets/Bg.png"

const Header = () => {
    return (
        <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
    >
        <div className="text-white text-center p-10">
            <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
            <p className="mt-4 text-lg">Your tagline goes here</p>
       
        </div>
    </div>
    );
};

export default Header;