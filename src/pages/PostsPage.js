import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../slices/posts";
import { Post } from "../components/Post";

// Redux state is now in the props of the component
const PostsPage = () => {
    const dispatch = useDispatch()
    const { posts, loading, hasErrors } = useSelector(postsSelector)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

     // Show loading, error, or success state
    const renderPosts = () => {
        if(loading)
            return <p>Loading...</p>
        if(hasErrors)
            return <p>Unabled to display..</p>
        return posts.map((post) => <Post key={post.id} post={post} excerpt />)
    }

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

export default PostsPage