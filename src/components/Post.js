import React from "react";

export const Post = ({ post }) => (
    <article className="post-expert">
        <h2>{post.title}</h2> 
        <p>{post.body.substring(0, 100)} </p>
    </article>
)