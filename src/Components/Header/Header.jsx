import {Link,NavLink} from "react-router-dom"
import "../../Styles/head.css"
const Header = () => {
  return (
      <header className="posset h-max self-center head justify-center flex flex-row p-3">
        <div className="head flex flex-row justify-center gap-2">
          <div className=" backdrop-blur-sm p-5 w-4/6 flex flex-row gap-1 justify-center items-center bg-teal-700/60 rounded-xl">
            <ul
              className="w-svw text-2xl text-white font-serif flex gap-0 items-center flex-row justify-evenly"
              style={{ listStyle: "none" }}
            >
              <li>
              <NavLink to="/about-me" className={({isActive})=>
                `${isActive ? "text-black rounded-lg p-2 bg-lime-500" : ""}`
              }>
                About-Me
              </NavLink>
              </li>

              <li><NavLink to="/education" 
              className={({isActive})=>
                `${isActive ? "text-black rounded-lg p-2 bg-lime-500" : ""}`
              }>
                Education
              </NavLink></li>
              <li> <NavLink to="/skills" className={({isActive})=>
                `${isActive ? "text-black rounded-lg p-2 bg-lime-500" : ""}`
              }>
                Skills
              </NavLink></li>
              <li> <NavLink to="/projects"  className={({isActive})=>
                `${isActive ? "text-black rounded-lg p-2 bg-lime-500" : ""}`
              }>
         
                Projects
              </NavLink></li>
              <li> <NavLink to="/contact-me" className={({isActive})=>
                `${isActive ? "text-black rounded-lg p-2 bg-lime-500" : ""}`
              }>
                Contact-Me
              </NavLink></li>
            </ul>
          </div>
          <button
            type="button"
            className="cursor-pointer 
          rounded-xl 
          bg-green-500/50
          w-40 text-wrap p-2 
          text-center 
          text-xl
          h-max
          font-serif
          hover:bg-amber-400
          hover:text-3xl
          "
          >
            Preview Resume
          </button>
        </div>
      </header>
  );
};

export default Header;
