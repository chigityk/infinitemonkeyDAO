import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';

function Navbar() {

    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
      }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
      }

      window.onload = function() {
      document.getElementById("closebtn").onclick = function() {closeNav()};
      document.getElementById("openbtn").onclick = function() {openNav()};
      }

    return(
    <>
    <div id="mySidebar" class="sidebar">
        <ul className="nav-menu-items">
            <li>
            <button id="closebtn" class="closebtn">x</button>
            </li>
            <li>
                <Link to="/"><AiIcons.AiFillHome></AiIcons.AiFillHome> Home</Link>
            </li>
            <li>
                <Link to="/book"><AiIcons.AiFillEdit></AiIcons.AiFillEdit> Book</Link>
            </li>
            <li>
                <Link to="/about"><BsIcons.BsPeopleFill></BsIcons.BsPeopleFill> About</Link>
            </li>
            <li>
                <Link to="/buy"><BsIcons.BsCurrencyDollar></BsIcons.BsCurrencyDollar> Buy</Link>
            </li>
            <li>
                <Link to="/vote"><BsIcons.BsCheck></BsIcons.BsCheck> Vote</Link>
            </li>
        </ul>
    </div>
    <div id='main'>
    <button id="openbtn" class="openbtn">☰ Menu</button>
        <Outlet />
    </div>
    </>
    ) 
}

    

export default Navbar
