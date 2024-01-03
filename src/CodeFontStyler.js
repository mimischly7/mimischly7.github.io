const KEYWORDS = [
    "Python", "Java", "JavaScript", "Ruby", "SQL", "Swing", "npm", "webpack",
    "Pandas", "Postgres", "MySQL", "PyGame", "HTML5", "Node", "React", "JEST",
    "Django"]
const CODE_STYLE_CLASS = "code-style";

const CodeFontStyler = (props) => {
    let {text} = props;
    return formatText(text)
}

function formatText(text) {
    const regex = new RegExp(`(${KEYWORDS.join('|')})`, 'gi');

    const stringsArray = text.split(regex);

    const parts = stringsArray.map((part, i) =>
        {
            if (KEYWORDS.includes(part) && part!=="Java") {
                return enclose(part, i)
            }
            else if (part==="Java")  {
                const nextWord = stringsArray[i+1].slice(0,6);

                if (nextWord==="Script") {
                    stringsArray[i+1] = stringsArray[i+1].slice(6,stringsArray[i+1].length)
                    return enclose("JavaScript");
                }
                else {
                    return enclose("Java")
                }
            }
            else {
                return part;
            }
        }

    );

    // return <>{parts}</>;
    return parts;
}

const enclose = (text, key) => <code className={CODE_STYLE_CLASS} key={key}>{text}</code>

export default CodeFontStyler