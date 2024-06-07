import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Socialmed = () => {
   return (
     <footer className="footer  w-full flex justify-center items-center position-fixed">
       <div className="flex justify-center items-center space-x-5">
         {/* Social media icons with links */}
         <a
           href="https://github.com/your-username"
           target="_blank"
           rel="noopener noreferrer"
         >
           <FaGithub className="w-8 h-8 cursor-pointer" />
         </a>
         <a
           href="https://www.linkedin.com/in/your-profile"
           target="_blank"
           rel="noopener noreferrer"
         >
           <FaLinkedin className="w-8 h-8 cursor-pointer" />
         </a>
         <a
           href="https://www.instagram.com/your-profile"
           target="_blank"
           rel="noopener noreferrer"
         >
           <FaInstagram className="w-8 h-8 cursor-pointer" />
         </a>
       </div>
     </footer>
   );
};

export default Socialmed;
