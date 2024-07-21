import "./PostCatalog.css"
import Navbar from "./Navbar.js"
import Post from "./Post.js"

const PostCatalog = (props) => {
    // let posts, updatePosts = useState([])
    const articles = ["mvn-ivy", "nlp-m1", "sent-udf-prob", "asda", "zzz"]
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <section id="main">
                <div className="container">
                    <h1>Recent Posts</h1>
                    {articles.map((value, _) => {
                        return <Post name={value}/>
                    })}
                </div>
            </section>
        </>

    );
}

export default PostCatalog