const KEYWORDS = [
    "Python", "Java", "JavaScript", "JavaScript", "Ruby", "SQL", "Swing", "npm", "webpack",
    "Pandas", "Postgres", "MySQL", "PyGame", "HTML5", "Node", "React", "JEST", "pygame",
    "Django"]
const CODE_STYLE_CLASS = "code-style";
const CodeFontStyler = (props) => {
    let {text} = props;
    // console.log("---------------")
    // console.log(text);
    // keywords.forEach((keyword) => {
    //     const code = <code className={CODE_STYLE_CLASS}> {keyword} </code>;
    //     text = text.replaceAll(keyword, code)
    // });
    // console.log(text);
    // console.log("~~~~~~~~~~~~~~~~~~")
    // return text;

    console.log("---------------")
    console.log(text);
    return (
        <div>
            {formatText(text)}
        </div>
    );
    console.log(text);
    console.log("~~~~~~~~~~~~~~~~~~")
}

function formatText(text) {
    const regex = new RegExp(`(${KEYWORDS.join('|')})`, 'gi');

    const stringsArray = text.split(regex);

    const parts = stringsArray.map((part, i) =>
        {
            if (KEYWORDS.includes(part) && part!=="Java") {
                // return <code className={CODE_STYLE_CLASS} key={i}>{part}</code>
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

    return <>{parts}</>;
}


const enclose = (text, key) => <code className={CODE_STYLE_CLASS} key={key}>{text}</code>



export default CodeFontStyler