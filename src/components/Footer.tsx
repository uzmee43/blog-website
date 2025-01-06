import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { IoLogoVercel, IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Bloggers" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link
          href={"https://vercel.com/uzma-khans-projects-2704eacb"}
          target="blank"
        >
          
          <IoLogoVercel  className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={"https://github.com/uzmee43"} target="blank">
          <BsGithub className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/uzma-khan6643/"}
          target="blank"
        >
   
         
          <IoLogoLinkedin className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
       
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved{" "}
        <Link
          href={"https://www.linkedin.com/in/uzma-khan6643/"}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @Uzma Khan
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
