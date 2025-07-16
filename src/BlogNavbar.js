import "./common.css"
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function BlogNavbar() {
    return <header>
        <nav>
            <ul>
                <HashLink smooth to="/#home">Home</HashLink>
                <HashLink smooth to="/#experiences">Experience</HashLink>
                <HashLink smooth to="/#projects">Projects</HashLink>
                <HashLink smooth to="/#resume">Resume</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
                <li><Link to="/posts"> Blog </Link></li>
            </ul>
        </nav>
    </header>
}

export default BlogNavbar;