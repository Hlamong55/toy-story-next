import React from "react";
import Logo from "./Logo";
import { TfiEmail } from "react-icons/tfi";
import { TbWorldPlus } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="footer sm:footer-horizontal bg-base-200 text-base-content py-8 md:px-28 px-5 md:pl-60">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover hover:text-secondary">Branding</a>
          <a className="link link-hover hover:text-secondary">Design</a>
          <a className="link link-hover hover:text-secondary">Marketing</a>
          <a className="link link-hover hover:text-secondary">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover hover:text-secondary">About us</a>
          <a className="link link-hover hover:text-secondary">Contact</a>
          <a className="link link-hover hover:text-secondary">Jobs</a>
          <a className="link link-hover hover:text-secondary">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover hover:text-secondary">Terms of use</a>
          <a className="link link-hover hover:text-secondary">Privacy policy</a>
          <a className="link link-hover hover:text-secondary">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2 hover:text-secondary hover:underline">
              <TfiEmail size={18} />
              <span>bijoymarma55@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 hover:text-secondary hover:underline">
              <TbWorldPlus size={18} />
              <span>+8801818470577</span>
            </li>
            <li className="flex items-center gap-2 hover:text-secondary hover:underline">
              <MdLocationOn size={18} />
              <span>Chattogram, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2 hover:text-secondary hover:underline">
              <MdAccessTime size={18} />
              <span>GMT +6 (Local Time)</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer bg-base-200 text-base-content border-base-300 border-t md:px-10 px-5 pb-3">
        <div className="footer bg-base-200 text-base-content border-base-300 border-t md:px-14 ">
          {/* TOP ROW */}
          <div className="w-full flex items-center justify-between">
            {/* LOGO */}
            <div>
              <Logo />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">

            <a  aria-label="X">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
                className="w-7 h-6 hover:opacity-80"
                alt="logo-twitter"
              />
            </a>

            <a aria-label="YouTube">
            <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                className="w-7 h-8 hover:opacity-80"
                style={{
                  filter:
                    "invert(23%) sepia(100%) saturate(7482%) hue-rotate(356deg) brightness(94%) contrast(115%)",
                }}
                alt="logo-youtube"
              />
            </a>

             <a aria-label="Facebook">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                className="w-7 h-7 hover:opacity-80"
                style={{
                  filter:
                    "invert(35%) sepia(79%) saturate(2855%) hue-rotate(201deg) brightness(93%) contrast(102%)",
                }}
                alt="logo-facebook"
              />
            </a>

            </div>
          </div>
        </div>

        
      </div>
      <div className="bg-neutral text-neutral-content py-2.5">
          {" "}
          <p className="text-center text-sm">
            Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-primary font-medium">Toy
            Story</span> Ltd
          </p>
        </div>
    </div>
  );
};

export default Footer;
