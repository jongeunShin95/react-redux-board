import React, { useState } from 'react';

const PostItem = React.memo(function PostItem({ post, onGetPostById, onEditPostById }) {
    return (
        <li>
            {post.title}({post.text})<button onClick={() => onGetPostById(post.id)}>가져오기</button><button onClick={() => onEditPostById(post.id)}>수정하기</button>
        </li>
    );
});

const PostList = React.memo(function PostList({ posts, onGetPostById, onEditPostById }) {
    return (
        <ul>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} onGetPostById={onGetPostById} onEditPostById={onEditPostById} />
            ))}
        </ul>
    );
});

function Posts({ posts, onAddPost, onEditPost }) {
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
    const onGetPostById = id => {
        const getPost = posts.filter(post => post.id === id)[0];
        setPost({
            title: getPost.title,
            text: getPost.text
        });
    }
    const onEditPostById = id => {
        post['id'] = id;
        onEditPost(post);
        setPost({
            title: '',
            text: ''
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="title" value={title} onChange={onChange} />
                <textarea name="text" value={text} onChange={onChange} />
                <button type="submit">게시판 등록</button>
            </form>
            <PostList posts={posts} onGetPostById={onGetPostById} onEditPostById={onEditPostById} />
        </div>
    );
}

export default Posts;