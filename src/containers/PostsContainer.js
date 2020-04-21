import React, { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addPost, editPost } from '../modules/posts';
import Posts from "../components/Posts";

function PostsContainer() {
    const posts = useSelector(state => state.posts)

    const dispatch = useDispatch();
    const onAddPost = useCallback(post => dispatch(addPost(post)), [dispatch]);
    const onEditPost = useCallback((post) => dispatch(editPost(post)), [dispatch]);

    return (
        <Posts
            posts={posts}
            onAddPost={onAddPost}
            onEditPost={onEditPost}
        />
    )
}

export default PostsContainer;