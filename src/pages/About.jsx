import { Element } from "react-scroll";
import { FaGraduationCap } from "react-icons/fa";
export function About() {
  return (
    <Element className="about-container" name="about">
      {/* <div>1</div>
        <div>2</div> */}
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="section-container">
        <div className="left-section">
          <div className="profile"></div>
          <div className="profile-info">
            <div className="profile-title">
              <h3>Name:</h3>
            </div>
            <div className="profile-data">
              <h3>M.Sathishkumar</h3>
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-title">
              <h3>Email:</h3>
            </div>
            <div className="profile-data">
              <h3>sathis.m76@gmail.com</h3>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-title">
              <h3>Phone No:</h3>
            </div>
            <div className="profile-data">
              <h3>9944252121</h3>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-title">
              <h3>GitHub Link:</h3>
            </div>
            <div className="profile-data">
              <a href="https://github.com/sathishkumarwebdev">
                <h3>Click here</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="education-title">
            <FaGraduationCap size={40} /> &nbsp; &nbsp;
            <h1>EDUCATION </h1>
          </div>
          <div className="b-e">
            <h3>BACHELOR OF ENGINEERING</h3>
            <h4>K.S.R College of Technology</h4>
            <p>Computer Scienec and Engineering</p>
            <p>2013 - 2016</p>
          </div>
          <div className="diplomo">
            <h3>DIPLOMO</h3>
            <h4>Mahendra Ploytechnic college</h4>
            <p>Computer Scienec and Engineering</p>
            <p>2010 - 2013</p>
          </div>
          <div className="school">
            <h3>Secondary school</h3>
            <h4>M.D.V Higher Secondary School</h4>
            <p>2009 - 2010</p>
          </div>
        </div>
      </div>
    </Element>
  );
}
