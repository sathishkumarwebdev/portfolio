import { MdFileDownload } from "react-icons/md";
import code from "../assets/images/coding.png";
// import pic from "../assets/images/sathish.png"
import { Element } from "react-scroll";
import "animate.css/animate.compat.css";

export function Home() {
  // const resumeDownload=()=>{

  // }

  return (
    <Element name="home" className="home-container">
      <div className="personal-info-container">
        <div className="personal-info">
          <div>
            <div className="personal-name animate__animated animate__fadeInLeft">
              Hey!{" "}
            </div>
            <div className="personal-name">I'm Sathishkumar M</div>

            <div className="personal-role">
              <h4>Full stack Developer</h4>
            </div>
            <a
              href={require("../pdf/sathishkumar_fullstack_resume.pdf")}
              download="sathishkumar-resume.pdf"
            >
              <div className="resume-btn">
                <span className="resume-txt"> Resume</span>
                <div>
                  <MdFileDownload />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="personal-img">
          <div>
            <img src={code} alt="coding" />
          </div>
        </div>
      </div>
    </Element>
  );
}
