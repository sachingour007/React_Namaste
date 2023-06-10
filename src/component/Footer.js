import React from "react";
import footerLogo from "../assets/image cover/pngwing.com.png";
// icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="p-8 flex justify-between sm:items-stretch  flex-col sm:flex-row ">
        <div className="">
          <img className="w-24 h-20" src={footerLogo} alt="" />
        </div>

        <div className="">
          <h3 className="font-bold text-gray-300 text-base mb-2">Main Links</h3>
          <ul className="text-white">
            <li className="text-xs mb-1">Order Tracking</li>
            <li className="text-xs mb-1">New Order</li>
            <li className="text-xs mb-1">Contact Us</li>
            <li className="text-xs mb-1">News & Blogs</li>
          </ul>
        </div>

        <div className="">
          <h3 className="font-bold text-gray-300 text-base mb-2">Support</h3>
          <ul className="text-white">
            <li className="text-xs mb-1">About Us</li>
            <li className="text-xs mb-1">Privacy Policy</li>
            <li className="text-xs mb-1">Terms & Conditions</li>
          </ul>
        </div>

        <div className="">
          <h3 className="font-bold text-gray-300 text-base mb-2">
            Join Our Newsletter
          </h3>
          <input
            className="py-1 min-w-full mb-2"
            type="email"
            placeholder="Enter your Email"
          />
          <h3 className="font-bold text-gray-300 text-lg mb-2">Follow Us</h3>
          <div className="flex gap-3 text-lg">
            <div>
              <FacebookRoundedIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
            <div>
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
