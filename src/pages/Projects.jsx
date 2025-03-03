import { Element } from "react-scroll";
import ecom from "../assets/images/ecomm.gif";
import xo from "../assets/images/xo.png";
import xotitle from "../assets/images/xotitle.png";
import flipkart from "../assets/images/Flipkart-Logo.png";
import resume from "../assets/images/resume.gif";
import job from "../assets/images/job.gif";
import resumelogo from "../assets/images/resumebuilder-logo.png";
import cclogo from "../assets/images/cc_logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { FaSuitcase } from "react-icons/fa";
export function Projects() {
  return (
    <Element className="projects-container" name="projects">
      <div className="project-title">
        <h1>My Works</h1>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={ecom} alt="" height={350} width={700} />
        </div>
        <div className="project-content">
          <div className="project-content-title">
            <FaShoppingCart size={30} />
            &nbsp;&nbsp;&nbsp;
            <h1>E-Commerce website</h1>
          </div>

          <div>
            <img src={flipkart} alt="flipkart" width={130} />
          </div>
          <div>
            <p>
              This project showcases my skills in front-end development, state
              management and React components.
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Features</h3>
            <p style={{ color: "#212529" }}>
              Home Page with banners and featured products, Product Listing with
              sorting and filtering, Product Details Page, Shopping Cart
              functionality, User Authentication.
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Technologies Used</h3>
            <p style={{ color: "#212529" }}>
              React.js, Css, html, React Router, Context, API, UseState,
              UseReduce, and Axios.
            </p>
          </div>
          <div className="link-projects">
            <a href="https://github.com/sathishkumarwebdev/React-Flipkart-Ecommerce-Web">
              <div className="link-btn">
                <h4>Get Source</h4>{" "}
                <FaArrowCircleRight size={32} className="arrow-link" />
              </div>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://ecommerce-sathishkumar-cart.netlify.app">
              <div className="link-btn">
                <h4>Demo Link</h4>{" "}
                <FaArrowCircleRight size={32} className="arrow-link" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-content">
          <div className="project-content-title">
            <HiDocumentDuplicate size={30} /> &nbsp; &nbsp;{" "}
            <h1 id="resume-h1">Resume making website</h1>
          </div>
          <div className="project-content-title">
            <img src={resumelogo} alt="flipkart" />
            {/* <h1 style={{ color: "#d32de4" }}>Resume Builder</h1> */}
          </div>
          <div>
            <p>
              Created a Resume Builder application to help users effortlessly
              craft professional resumes. The tool provides templates,
              customization options, and export features to enhance the resume
              creation process for job seekers.
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Features</h3>
            <p style={{ color: "#212529" }}>
              Template Selection: Users can choose from various pre-designed
              resume templates to suit different industries and styles. <br />
              Customization Options: Allows users to personalize their resumes
              with custom sections, fonts, colors, and layouts. <br />
              Export Formats: Users can export their resumes in multiple
              formats, including PDF and Word. <br />
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Technologies Used</h3>
            <p style={{ color: "#212529" }}>
              Frontend: HTML, CSS, JavaScript, React <br />
              Backend: Node.js, Express <br />
              Database: MongoDB
              <br />
            </p>
          </div>
          <div>
            <a href="https://github.com/sathishkumarwebdev/Resume-builder-react">
              <div className="link-btn">
                <h4>Get Source</h4>{" "}
                <FaArrowCircleRight size={32} className="arrow-link" />
              </div>
            </a>
          </div>
        </div>
        <div className="project-image">
          <img src={resume} alt="resume maker" />
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={job} alt="job seraching website" />
        </div>
        <div className="project-content">
          <div className="project-content-title">
            <FaSuitcase size={30} />
            &nbsp;&nbsp;&nbsp;
            <h1>Job searching portal</h1>
          </div>

          <div>
            <img src={cclogo} alt="flipkart" height={100} />
          </div>
          <div>
            <p>
              Developed a comprehensive Job Search Portal designed to connect
              job seekers with top employers across various industries. The
              portal features advanced search functionalities, personalized job
              alerts.
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Features</h3>
            <p style={{ color: "#212529" }}>
              <b>Advanced Search Filters:</b> Allows users to search for jobs
              based on various criteria such as role, location, industry, and
              company. Personalized <br />
              <b>Job Alerts:</b> Sends notifications to users about new job
              listings that match their search criteria. Company Profiles:
              Provides detailed profiles for companies, including job openings,
              company culture, and employee reviews. <br />
              <b>Job Alerts:</b> Application Tracking: Users can track the
              status of their job applications and receive updates. <br />
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Technologies Used</h3>
            <p style={{ color: "#212529" }}>
              Frontend: HTML, CSS, JavaScript, React <br />
              Backend: Node.js, Express <br />
              Database: MongoDB <br />
            </p>
          </div>
          <div className="link-projects">
            <a href="https://github.com/sathishkumarwebdev/careerconnect">
              <div className="link-btn">
                <h4>Get Source</h4>{" "}
                <FaArrowCircleRight size={32} className="arrow-link" />
              </div>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://careerconnect-job.netlify.app/">
              <div className="link-btn">
                <h4>Demo Link</h4>{" "}
                <FaArrowCircleRight size={32} className="arrow-link" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-content">
          <div className="project-content-title">
            <IoLogoGameControllerB size={30} />
            &nbsp;&nbsp;&nbsp;
            <h1>Game</h1>
          </div>
          <div>
            <img src={xotitle} alt="" height={50} />
          </div>
          <div>
            <p>
              Welcome to my Tic Tac Toe game project! This classic game. The
              game features a responsive design, player vs. player mode, and a
              simple, intuitive interface.
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Features</h3>
            <p style={{ color: "#212529" }}>
              Responsive Design: The game is responsive and works well on
              different devices. <br />
              Player vs. Player Mode : Two players can play the game on the same
              device. <br />
              Game Status Display: Displays which player's turn it is and
              announces the winner or a draw. <br />
              Reset Functionality : Players can reset the game board to start a
              new game. <br />
            </p>
          </div>
          <div>
            <h3 style={{ color: "#d32de4" }}>Technologies Used</h3>
            <p style={{ color: "#212529" }}>
              HTML: For the structure of the game. <br />
              CSS : For styling the game. <br />
              JavaScript : For the game logic and interactivity. <br />
            </p>
          </div>
          <div>
            <a href="https://github.com/sathishkumarwebdev/xogame-javascript">
              <div className="link-btn">
                <h4>Get Source</h4>{" "}
                <FaArrowCircleRight size={32} className="arrow-link" />
              </div>
            </a>
          </div>
        </div>
        <div className="project-image">
          <img src={xo} alt="" height={400} />
        </div>
      </div>
    </Element>
  );
}
