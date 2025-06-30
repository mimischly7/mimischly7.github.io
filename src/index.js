import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import About from './App';
import PostCatalog from './PostCatalog';
import "./common.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import {ArticleList, Post, Blog} from  "./Blog.js"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <About/>
    },
    {
        path: "/posts",
        element: <Blog/>, 
        children: [
            { index: true, element: <ArticleList folderPath="/data/articles" /> },
            // dynamic path resolution for individual posts
            { path: ":slug", element: <Post basePath="/data/articles" /> }, 
        ],
    }
])

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);