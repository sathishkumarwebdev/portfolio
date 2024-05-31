import {NavBar} from "./components/NavBar";
import {Home} from "./pages/Home";
import {Skills} from "./pages/Skills";
import {Projects} from "./pages/Projects";
import {About} from "./pages/About";
import { Contact } from "./pages/Contact";


function App() {
  return (
   <>
    <NavBar/>
    <Home/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
   </>
  );
}

export default App;
