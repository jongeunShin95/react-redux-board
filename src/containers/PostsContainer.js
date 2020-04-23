import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, editPost, removePost } from '../modules/posts';
import Posts from "../components/Posts";

function PostsContainer() {
    const posts = useSelector(state => state.posts)

    const dispatch = useDispatch();
    const onAddPost = useCallback(post => dispatch(addPost(post)), [dispatch]);
    const onEditPost = useCallback((post) => dispatch(editPost(post)), [dispatch]);
    const onRemovePost = useCallback(id => dispatch(removePost(id)), [dispatch]);

    return (
        <Posts
            posts={posts}
            onAddPost={onAddPost}
            onEditPost={onEditPost}
            onRemovePost={onRemovePost}
        />
    )
}

export default PostsContainer;