import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] ">
      <div className="flex flex-col items-center justify-center pt-20 pb-10 max-w-7xl w-11/12 mx-auto">
        <div>
        <h1 className="font-bold text-4xl lg:text-5xl text-center">KeenKeeper</h1>
        <p className="text-base text-center text-white mt-4 ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div>
        <p className="text-lg lg:text-xl text-white my-4 ">Social Links</p>
        <div className="flex justify-center items-center gap-2">
            <span className="text-black bg-white w-5 h-5 p-1 rounded-full flex items-center justify-center">
                <PiInstagramLogoFill className="text-lg" />
            </span>
            <span className="text-black bg-white w-5 h-5 p-1 rounded-full flex items-center justify-center">
                <FaFacebook className="text-lg" />
            </span>
            <span className="text-black bg-white p-1 w-5 h-5 rounded-full flex items-center justify-center">
                <FaXTwitter className="text-lg" />
            </span>
        </div>
        
      </div>
      <div className="divider"></div>
      <div className="w-full">
        <div className="flex items-center flex-col sm:flex-row justify-between flex-1">
            <p className="text-[#FAFAFA] text-base pb-2">© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <p className="text-[#FAFAFA] text-base">Privacy Policy</p>
                <p className="text-[#FAFAFA] text-base">Terms of Service</p>
                <p className="text-[#FAFAFA] text-base">Cookies</p>
            </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
