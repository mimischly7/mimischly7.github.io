/*
Expected props:
    - folderPath: string
    - name: string

 */
import {useState, useEffect} from "react"
function Post(props) {
    const {name} = props;
    const [json, setJSON] = useState(undefined) // count is initialized to 0

    let json_path = "/data/articles/" + name + '/stats.json'
    const filepath = "/data/articles/" + name + "/" + name + ".md"
    // ***   Line 19:12:  React Hook useEffect has a missing dependency: 'json_path'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    useEffect(() => {
        fetch(json_path)
            .then((response) => {console.log(response); return response.json();})
            .then((json) => setJSON(json));
        }, [name]
    )

    console.log(json_path)

    return (
        <div className="post">
            <h2>{json ? json.name : "loading..."}</h2>
            <p>{json ? json.dateCreated : "loading..."}</p>
            <p>{json ? json.summary : "loading..."}</p>
            <p>{json ? json.relatedTags : "loading..."}</p>
            <a href={filepath}>Read More</a>
        </div>
    )
}

export default Post