import {Element} from "react-scroll";
import ecom from "../assets/images/flipkart-project.png";
import xo from "../assets/images/xo.png";
import xotitle from "../assets/images/xotitle.png"
import flipkart from "../assets/images/Flipkart-Logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
export function Projects(){
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
              This project showcases my skills in front-end development, state
              management and React components.
            </div>
            <div>
              Features
              <ul>
                <li>Home Page with banners and featured products</li>
                <li>Product Listing with sorting and filtering</li>
                <li>Product Details Page</li>
                <li>Shopping Cart functionality</li>
                <li>User Authentication</li>
              </ul>
            </div>
            <div>
              Technologies Used
              <ul>
                <li>React.js</li>
                <li>Css</li>
                <li>html</li>
                <li>React Router</li>
                <li>Context API</li>
                <li>UseContext</li>
                <li>UseState</li>
                <li>UseReduce</li>
                <li>Axios</li>
              </ul>
            </div>
            <div>
              Source Code:
              <ul>
                <li>
                  GitHub link:
                  <a href="https://github.com/sathishkumarwebdev/React-Flipkart-Ecommerce-Web">
                    Click here
                  </a>
                </li>
              </ul>
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
            <img src={xotitle} alt="" height={50} />
            <h3>Teachnoligies:</h3>
            <span>Html,css and Javascript</span>
          </div>
          <div className="project-image">
            <img src={xo} alt="" height={400} />
          </div>
        </div>
        <div className="project">
          <div className="project-image"></div>
          <div className="project-content">content</div>
        </div>
      </Element>
    );
}