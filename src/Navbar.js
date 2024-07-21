import "./Navbar.css"

function Navbar() {
    return <header>
        <nav>
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/posts">Blog</a></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;