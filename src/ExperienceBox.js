import "./ExperienceBox.css"

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
                <h3>Position: {position}</h3>
                <p>Company: {employer}</p>
                <p>Dates: {time_period}</p>
            </header>
            <p>Description: {description}</p>
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