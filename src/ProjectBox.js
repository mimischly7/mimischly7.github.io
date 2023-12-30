import "./ProjectBox.css"
const ProjectBox = (props) => {
    const title = props.title;
    const tech_tags = props.tech_tags;
    const description = props.description;
    const img_url = props.img_url;

    return (
        <div className="project-container">
            <div className="project-title"> {title} </div>
            <ul className="technology-tags">
                {tech_tags.map((tag) => <li> {tag} </li>)}
            </ul>
            <div className="project-description">
                {description}
            </div>
            <img className="project-visual" src="/images/proj1.jpeg" alt="Project Visual"
                 style={{ width: '600px'}}></img>
            <a href="link-to-your-project-details.html" className="details-button">Learn More</a>
        </div>
    );
}

export default ProjectBox;