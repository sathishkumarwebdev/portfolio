import {useState} from "react"
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { MdDeveloperMode } from "react-icons/md";

export function NavBar() {
  const [btnClicked,setBtnClicked]=useState(false)
  return (
    <header>
      <nav>
        <div className="navbar-conatiner">
          <div className="nav-logo">
            <MdDeveloperMode size={30} />
            Front-end Developer
          </div>
          <div className="nav-items-conatiner">
            <div className={btnClicked ? "nav-items clicked" : "nav-items"}>
              <Link to="home" smooth={true} duration={500}>
                <div>Home</div>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                <div>Skills</div>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                <div>Projects</div>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <div>About</div>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <div>Contact</div>
              </Link>
            </div>
            <a href="tel:8778604816">
              <div className={btnClicked ? "phone clicked" : "phone"}>
                +91 8778604816
                <div className="phone-icon">
                  <FaPhone />
                </div>
              </div>
            </a>
            <div
              className="hamburger"
              onClick={() => setBtnClicked(!btnClicked)}
            >
              {btnClicked ? (
                <RxCross1 size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
