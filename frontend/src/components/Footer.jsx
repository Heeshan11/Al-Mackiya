import React from 'react'
import { FaInstagram, FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";

const Footer = () => {
    return (


        <footer>
        <div className="footer-content">
          <h5>R/Al-Mackiya M.M.V</h5>
          <p>
            Made with  by A.R. Jenna
          </p>
          <ul className="socials">
            <li>
              <a target='blank' href="https://web.facebook.com/Mackiyanz/?_rdc=1&_rdr">
                <FaFacebook size={30} color="#0077b5" />
              </a>
            </li>
            <li>
              <a target='blank' href="http://almackiya.sch.lk/">
                <TbWorldCheck size={30} color="#8bc5e3" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <FaInstagram size={30} color="#C13584" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram size={30} color="#C13584" />
              </a>
            </li> */}
            
           
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
             &copy; 2024 copyright R/Al-Mackiya Muslim Maha Vidyalaya{" "}
          </p>
       
        </div>
      </footer>

    )
}

export default Footer
