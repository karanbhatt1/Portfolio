 import {
   FaHtml5,
   FaCss3Alt,
   FaJsSquare,
   FaJava,
   FaPython,
   FaNodeJs,
   FaGitAlt,
   FaGithub,
 } from "react-icons/fa";
 import { SiExpress, SiTensorflow, SiPytorch } from "react-icons/si";
 
 const skills_data = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 75 },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" />, level: 70 },
    { name: "Java", icon: <FaJava className="text-red-600 text-4xl" />, level: 80 },
    { name: "Python", icon: <FaPython className="text-blue-400 text-4xl" />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" />, level: 60 },
    { name: "Express.js", icon: <SiExpress className="text-gray-400 text-4xl" />, level: 70 },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" />, level: 87 },
    { name: "GitHub", icon: <FaGithub className="text-white text-4xl" />, level: 90 },
    { name: "Machine Learning", icon: <SiTensorflow className="text-orange-500 text-4xl" />, level: 75 },
    { name: "Deep Learning", icon: <SiPytorch className="text-red-500 text-4xl" />, level: 70 },
    { name: "Artificial Intelligence", icon: <SiTensorflow className="text-yellow-600 text-4xl" />, level: 65 },
];

export default skills_data;