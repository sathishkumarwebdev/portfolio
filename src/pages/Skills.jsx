import React from "react";
import { Element } from "react-scroll";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";



export const Skills = () => {
  

  return (
    <Element name="skills" className="skills-container">
      <div  className="skills-wrapper">
        <div className="skills-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills-content">
          <div className="skill-content-center">
            <div className="skill-content-items">
              <div className="content">
                <ImHtmlFive color={"#e34c26"} />
                <span style={{ color: "#e34c26" }}> Html</span>
                {/* <ProgressBar
                  completed={inView ? 80 : 0}
                  width="200px"
                  bgColor="#FF5F1F"
                  animateOnRender={true}
                /> */}
              </div>
              <div className="content">
                <IoLogoCss3 color="blue" />
                <span style={{ color: "blue" }}> Css</span>
              </div>
              <div className="content">
                <IoLogoJavascript color="#f0db4f" />
                <span style={{ color: "#f0db4f" }}> JavaScript</span>
              </div>
              <div className="content">
                <RiNodejsLine color="#3c873a" />
                <span style={{ color: "#3c873a" }}> Node JS</span>
              </div>

              <div className="content">
                <RiReactjsLine color={"#61DBFB"} />
                <span style={{ color: "#61DBFB" }}>React</span>
              </div>
              <div className="content">
                <FaJava color="#5382a1" />
                <span style={{ color: "#5382a1" }}>Java</span>
              </div>

              <div className="content">
                <SiExpress color="#303030" />
                <span style={{ color: "#3c873a" }}>Express Js</span>
              </div>
              <div className="content">
                <DiMongodb color="#4DB33D" />
                <span style={{ color: "#3FA037" }}> MongoDB</span>
                {/* <ProgressBar
                  completed={inView ? 75 : 0}
                  width="200px"
                  bgColor="#f0db4f"
                  animateOnRender={true}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
