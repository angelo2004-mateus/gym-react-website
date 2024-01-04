import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-y-10 items-center text-white text-[30px] h-[200px]">
        <div className="flex gap-10">
            <a href="https://github.com/angelo2004-mateus" target="_blank"><IoLogoGithub /></a>
            <p ><FaInstagram /></p>
            <a href="https://www.linkedin.com/in/angelo-mateus-nery-souza-a2738821b/" target="_blank"><FaLinkedinIn /></a>
        </div>
        <h2 className="text-[16px] font-bold opacity-50">CREATED BY ÂNGELO MATEUS</h2>
    </footer>
  )
}

export default Footer
