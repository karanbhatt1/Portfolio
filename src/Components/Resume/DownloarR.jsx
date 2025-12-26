import { IoMdDownload } from "react-icons/io";



const ResumeButton = (downlr) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
      initial={{ opacity: 0.5, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      onClick={downlr}
      style={{ height: "4rem" }}
      className="hover:bg-blue-400 p-2 flex flex-row gap-2 text-2xl items-center rounded-md bg-blue-500 text-white border-blue-950 border-4"
    >
      Download Resume
       <span className="self-center text-2xl  p-1">
      <IoMdDownload />
      </span>
    </motion.button>
  );
};

export default ResumeButton;

//  <motion.button
//           whileHover={{ scale: 1.1,
//           transition:{duration:0.2}}}
//             whileTap={{
//               scale: 0.95,
//               transition:{duration:0.2}
//             }}
//             initial={{
//               opacity: 0.5,
//               scale: 0.5,
//               transition:{duration:0}
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{ delay: 0.5, duration:1}}
            
//             onClick={downloadR}
//             style={{ height: "4rem", width: "auto" }}
//             className="hover:bg-blue-400 p-2 text-center flex flex-row gap-0 text-2xl items-center rounded-md bg-blue-500 text-white border-blue-950 border-4 border-solid"
//           >
//             <a target="karan_resume.pdf" downl>Download Resume</a>
//             <span className="self-center text-2xl  p-1">
//               <IoMdDownload />
//             </span>
//           </motion.button>
