import "./common.css"

import { Link } from "react-router-dom";

function Navbar() {
    return <header>
        <nav>
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#home">Experience</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><Link to="/posts"> Blog </Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;