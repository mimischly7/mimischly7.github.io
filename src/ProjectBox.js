import "./ProjectBox.css"
import CodeFontStyler from "./CodeFontStyler";

const ProjectBox = (props) => {
    const title = props.title;
    const tech_tags = props.tech_tags;
    const description = props.description;
    const img_path = props.img_path;
    const link = props.link;

    return (
        <div className="project-container">
            <div className="project-title"> {title} </div>
            <ul className="technology-tags">
                {tech_tags.map((tag) => <li> {tag} </li>)}
            </ul>
            <div className="project-description">
                <CodeFontStyler text={description}/>
            </div>
            <img className="project-visual" src={img_path} alt="Project Visual"
                 style={{ width: '450px'}}></img>
            <a href={link} className="details-button">Learn More</a>
        </div>
    );
}

export default ProjectBox;