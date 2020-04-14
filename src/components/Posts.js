import React, { useState } from 'react';

const PostItem = React.memo(function PostItem({ post }) {
    return (
        <li>
            {post.title}({post.text})
        </li>
    );
});

const PostList = React.memo(function PostList({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </ul>
    );
});

function Posts({ posts, onAddPost }) {
    const [post, setPost] = useState({
        title: '',
        text: ''
    });
    const { title, text } = post;
    const onChange = e => {
        const { value, name } = e.target;
        setPost({
            ...post,
            [name]: value
        });
    }
    const onSubmit = e => {
        e.preventDefault();
        onAddPost(post);
        setPost({
            title: '',
            text: ''
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="title" value={title} onChange={onChange} />
                <textarea name="text" value={text} onChange={onChange} />
                <button type="submit">게시글 등록</button>
            </form>
            <PostList posts={posts} />
        </div>
    );
}

export default Posts;