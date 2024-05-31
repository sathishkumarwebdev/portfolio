import { MdFileDownload } from "react-icons/md";
import code from "../assets/images/coding.png";
import pic from "../assets/images/sathish.png"
import { Element } from "react-scroll";
import wave from "../assets/images/wave.svg"
export function Home() {
  return (
    <Element name="home" className="home-container">
      <div className="personal-info-container">
        <div className="personal-info">
          <div>
            <div className="personal-name">Hey! </div>
            <div className="personal-name">I'm Sathishkumar M</div>

            <div className="personal-role">
              <h4>Front-end Developer</h4>
            </div>
            <div className="resume-btn">
              <span className="resume-txt"> Resume</span>
              <div>
                <MdFileDownload />
              </div>
            </div>
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
