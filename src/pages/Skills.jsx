import React from "react";
import{Element} from "react-scroll";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";


export const Skills = () => {
  return (
    <Element name="skills" className="skills-conatiner">
     
      <div className="skills-title">
        <h1>My Skills</h1>
      </div>
      <div className="skills-content">
        <div className="skill-content-center">
          <div className="skill-content-items">
            <div className="content">
              <ImHtmlFive color={"#e34c26"} />
              <span style={{ color: "#e34c26" }}> Html</span>

              <ProgressBar
                completed={80}
                width="200px"
                bgColor="#FF5F1F"
                animateOnRender="true"
                initCompletedOnAnimation={0}
              />
            </div>
            <div className="content">
              <IoLogoCss3 color="blue" />
              <span style={{ color: "blue" }}> Css</span>

              <ProgressBar
                completed={75}
                width="200px"
                bgColor="blue"
                animateOnRender="true"
                initCompletedOnAnimation={0}
              />
            </div>
            <div className="content">
              {/* <TbBrandJavascript color="blue" /> */}
              <IoLogoJavascript color="#f0db4f" />
              <span style={{ color: "#f0db4f" }}> JavaScript</span>

              <ProgressBar
                completed={75}
                width="200px"
                bgColor="#f0db4f"
                animateOnRender="true"
                initCompletedOnAnimation={0}
              />
            </div>
          </div>
          <div className="skill-content-items ">
            <div className="content">
              <RiReactjsLine color={"#61DBFB"} />
              <span style={{ color: "#61DBFB" }}>React</span>

              <ProgressBar
                completed={75}
                width="200px"
                bgColor="#61DBFB"
                animateOnRender="true"
                initCompletedOnAnimation={0}
              />
            </div>
            <div className="content">
              <FaJava color="#5382a1" />
              <span style={{ color: "#5382a1" }}>Java</span>

              <ProgressBar
                completed={75}
                width="200px"
                bgColor="#5382a1"
                animateOnRender="true"
                initCompletedOnAnimation={0}
              />
            </div>
            <div className="content">
              <FaGitAlt color="#F1502F" />
              <span style={{ color: "#F1502F" }}>Git</span>
              <ProgressBar
                completed={75}
                width="200px"
                bgColor="#F1502F"
                animateOnRender="true"
                initCompletedOnAnimation={0}
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
