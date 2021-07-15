import React from 'react';
import {FaLinkedinIn} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import {GoMarkGithub} from "react-icons/go";
import {FiMail} from "react-icons/fi";
import {GrFacebook} from 'react-icons/gr';
function Footer(props) {
    return(
        <div>
            <h6 id="getintouch">Get In Touch</h6>
            <a href="mailto:salunkhepravin41@gmail.com" target="_blank"><FiMail className="footer-icons" stroke="#ff0000" fill="white" size="25px"/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/pravin-salunkhe-a7b40817b/" target="_blank"><FaLinkedinIn className="footer-icons" fill="#0077b5" size="25px" /></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/_pravin.salunkhe/" target="_blank"><GrInstagram className="footer-icons" fill="#bc2a8d" size="25px" /></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.facebook.com/pravin.salunkhe.75098364" target="_blank"><GrFacebook className="footer-icons" fill="#39569c" size="25px"/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/PravinSalunkhe" target="_blank"><GoMarkGithub className="footer-icons" size="25px" /></a>
        </div>
    );
}

export default Footer;