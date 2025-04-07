import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import logo from "../assets/PBlogo.png"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 xl:mx-12">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2 rounded-sm" width={45} height={32} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/prachi-bharadwa-a585232a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="size-8 text-blue-600"/>
          </a>
          <a href="https://github.com/Prachi2004-pro" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IoLogoGithub className="size-8"/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar