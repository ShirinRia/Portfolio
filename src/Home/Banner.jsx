import banner from '../assets/banner.png'
import shirin from '../assets/shirin.png'
import cv from '../assets/ShirinSultana.pdf'
import { BiPhoneCall } from "react-icons/bi";
import { FaFileDownload } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between px-14' style={{ backgroundImage: `url(${banner})` }}>

            <div className="max-w-xl flex flex-col gap-10 pt-10">

                <h1 className="text-4xl lg:text-7xl font-medium text-white">Shirin Sultana</h1>
                <h3 className="text-4xl font-normal text-[#DB9A64]">Web Developer</h3>

                <div className="flex gap-5"> <button className="btn border-1 border-[#DB9A64] bg-transparent   text-white  rounded-lg text-xl font-bold flex items-center hover:bg-[#DB9A64] hover:border-none" >
                    <FaFileDownload /> <a href={cv} download>Download CV</a>
                </button>
                    <button className="btn flex items-center border-1 border-[#DB9A64] bg-transparent  text-white  rounded-lg text-xl font-bold hover:bg-[#DB9A64] hover:border-none">
                        <BiPhoneCall />
                        <a href="//api.whatsapp.com/send?phone=8801732433339" 	target="_blank" rel="noopener noreferrer"> Contact</a>

                    </button>
                </div>

            </div>
            <img src={shirin} alt="shirin" />
        </div>

    );
};

export default Banner;