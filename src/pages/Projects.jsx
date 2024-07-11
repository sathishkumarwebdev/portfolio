import { Element } from "react-scroll";
import ecom from "../assets/images/flipkart-project.png";
import xo from "../assets/images/xo.png";
import xotitle from "../assets/images/xotitle.png";
import flipkart from "../assets/images/Flipkart-Logo.png";
import resume from "../assets/images/resume.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi2";
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
          <div>
            <a href="https://github.com/sathishkumarwebdev/React-Flipkart-Ecommerce-Web">
              <div className="link-btn">
                <h4>Get Source</h4>{" "}
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
      <div className="project">
        <div className="project-image">
          <img src={resume} alt="" />
        </div>
        <div className="project-content">
          <div className="project-content-title">
            <HiDocumentDuplicate size={30} /> &nbsp; &nbsp;{" "}
            <h1>Resume Builder</h1>
          </div>
        </div>
      </div>
    </Element>
  );
}
