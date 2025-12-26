import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';



import "../../Styles/head.css"
const Header = () => {
  const previewR = () => {
    window.open("./KaranBhattResume.pdf", "_blank", "noopener,noreferrer");
  };
  return (
      <header className="posset h-max self-center head justify-center flex flex-row p-3">
        <div className="head flex flex-row justify-center gap-2">
          <div className=" backdrop-blur-sm p-5 w-4/6 flex flex-row gap-1 justify-center items-center bg-teal-700/80 rounded-xl">
            <ul
              className="w-svw text-2xl text-white font-serif flex gap-0 items-center flex-row justify-evenly"
              style={{ listStyle: "none" }}
            >
              <li>
              <Link smooth to="#about"  className=" cursor-pointer hover:text-yellow-300">
                About-Me
              </Link>
              </li>

              <li><Link smooth to="#Education" className="cursor-pointer hover:text-yellow-300">
                Education
              </Link></li>
              <li> <Link  smooth to="#skills" className="cursor-pointer hover:text-yellow-300">
                Skills
              </Link></li>
              <li> <Link  smooth to="#projects" className="cursor-pointer hover:text-yellow-300">
         
                Projects
              </Link></li>
              <li> <Link smooth = {true}
               to="#contact" className="cursor-pointer hover:text-yellow-300">
                Contact-Me
              </Link></li>
            </ul>
          </div>
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
            type="button"
            className="cursor-pointer 
          rounded-xl 
          bg-green-500
          w-40 text-wrap p-2 
          text-center 
          text-xl
          h-max
          font-serif
          hover:bg-amber-400
          hover:text-3xl
          "
          onClick={previewR}
          >
            Preview Resume
          </motion.button>
        </div>
      </header>
  );
};

export default Header;
