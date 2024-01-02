import "./ExperienceBox.css"
import CodeFontStyler from "./CodeFontStyler";

/*
Expected props:
    - employer: string
    - position: string
    - time_period: string
    - description: string
    - tech_tags: Array[string]
    - link: string
 */
const ExperienceBox = (props) => {
    const {employer, position, time_period, description, tech_tags, link} = props;

    return (
        <article className="job">
            <header>
                <h3><i><b>Position</b></i>: {position}</h3>
                <p><i><b>Company</b></i>: {employer}</p>
                <p><i><b>Dates</b></i>: {time_period}</p>
            </header>
            <p><CodeFontStyler text={description}/></p>
            <ul className="tech-tags">
                {tech_tags.map((tag) => <li>{tag}</li>)}
            </ul>
            <a href={link} target="_blank" className="github-link">
                <i className="fa-brands fa-github"></i> View on GitHub
            </a>
        </article>
    );
}

export default ExperienceBox;