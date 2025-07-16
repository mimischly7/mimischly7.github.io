import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, Outlet } from "react-router-dom";
import markdownit from "markdown-it";
// import markdownItMath from "markdown-it-math";
import markdownItKatex from "markdown-it-katex";
import hljs from "highlight.js";

// import Navbar from "./Navbar.js"
import BlogNavbar from "./BlogNavbar"

import "katex/dist/katex.min.css";
import "highlight.js/styles/github.css";

// ------------------------------------------------------------
//  Markdown‑it instance with math, KaTeX & syntax highlighting
// ------------------------------------------------------------
const md = markdownit({
  html: true,
  linkify: true,
  highlight: (code, lang) => {
    try {
      const valid = lang && hljs.getLanguage(lang);
      return `<pre class="hljs"><code>${valid ? hljs.highlight(code, { language: lang }).value : md.utils.escapeHtml(code)}</code></pre>`;
    } catch {
      return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`;
    }
  },
})
  // .use(markdownItMath)
  .use(markdownItKatex);

// ------------------------
//  Reusable fetch‑to‑HTML
// ------------------------
function useMarkdown(url) {
  const [html, setHtml] = useState(null);
  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then((r) => r.text())
      .then((text) => !cancelled && setHtml(md.render(text)))
      .catch(() => !cancelled && setHtml("<p>⚠️ Failed to load article.</p>"));
    return () => {
      cancelled = true;
    };
  }, [url]);
  return html;
}

// -----------------
//  Article <List/>
// -----------------
export function ArticleList({ folderPath }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${folderPath}/index.json`)
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, [folderPath]);


//   <ul className="article-list">
//   {posts.map(({ slug, title, date, desc, tags }) => (
//     <li key={slug} className="article-card">
//       <h2 className="article-title">
//         <Link to={`/posts/${slug}`}>{title}</Link>
//       </h2>

//       {date && <p className="article-meta">{date}</p>}
//       {desc && <p className="article-desc">{desc}</p>}

//       {!!tags?.length && (
//         <ul className="article-tags">
//           {tags.map(t => <li key={t}>{t}</li>)}
//         </ul>
//       )}
//     </li>
//   ))}
// </ul>

  return (
    <main>
      <header className="blog-heading">
        <h1 className="blog-title">Blog</h1>
        <h3 className="blog-subtitle">
          This is a place where I record things I find worth recording..
        </h3>
      </header>
      
      <ul className="article-list">
        {posts.map(({ slug, title, date }) => (
          // <li key={slug}>
          //   <Link to={`/posts/${slug}`}>
          //     {title}
          //     {console.log(title)}
          //   </Link>
          //   {date && <span>{date}</span>}
          // </li>
          <li key={slug} className="article-card">
          <h2 className="article-title">
            <Link to={`/posts/${slug}`}>{title}</Link>
          </h2>

          {/* {date && <p className="article-meta">{date}</p>}
          {desc && <p className="article-desc">{desc}</p>}

          {!!tags?.length && (
            <ul className="article-tags">
              {tags.map(t => <li key={t}>{t}</li>)}
            </ul>
          )} */}


          <p className="article-meta">date</p>
          <p className="article-desc">desc</p>

            <ul className="article-tags">
              tags
            </ul>
        </li>
        ))}
      </ul>
    </main>
  );
}

// ----------------
//  Single <Post/>
// ----------------
export function Post({ basePath }) {
  const { slug } = useParams();
  const src = `${basePath}/${slug}/${slug}.md`;
// const src = "/data/articles/mvnivy-dep.md";
console.log(src);
  const html = useMarkdown(src);

  // TODO: this currently does not do the job of replace relative image paths with absolute.
  const fixImgSrc = (rawHtml) =>
    rawHtml.replace(
      /<img\s+([^>]*?)src=["']([^"':]+)["']([^>]*?)>/g, (_m, pre, path, post) => {
      const full = `${basePath}/${slug}/${path}`;
      return `<img ${pre}src="${full}"${post}>`;
    });

  if (!html) return <p className="p-6">Loading…</p>;

  return (
    <main>
      {/* <Link to="/posts" className="back-button">← Back</Link> */}

      <header className="post-header">
        <h1 className="post-title">{slug}</h1>
        {"June 12 2024" && <p className="post-date">June 12 2024</p>}
      </header>

      <article
        className="markdownit-gen"
        dangerouslySetInnerHTML={{ __html: fixImgSrc(html) }}
      />
    </main>
  );
}

// -------------
//  <Blog/> app
// -------------
export function Blog({ folderPath = "/data/articles" }) {
  return ( // need to have the `Outlet` as a placeholder
    
    <>
    <header>
                <BlogNavbar/>
            </header>
      <Outlet /> 
    </>
  );
}

