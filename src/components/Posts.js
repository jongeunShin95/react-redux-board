import React, { useState } from "react";
import PostModal from "./PostModal";

const PostItem = React.memo(function PostItem({ post, onGetPostById }) {
  return (
    <tr
      onClick={() => {
        onGetPostById(post.id);
      }}
    >
      <td>{post.title}</td>
      <td>{post.text}</td>
    </tr>
  );
});

const PostList = React.memo(function PostList({ posts, onGetPostById }) {
  return (
    <div>
      <table className="table table-hover">
          <caption>게시글{posts.length}</caption>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} onGetPostById={onGetPostById} />
          ))}
        </tbody>
      </table>
    </div>
  );
});

function Posts({ posts, onAddPost, onEditPost, onRemovePost }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [postId, setPostId] = useState(0);
  const [post, setPost] = useState({
    title: "",
    text: "",
  });
  const { title, text } = post;
  const onChange = (e) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddPost(post);
    handleClose();
  };

  const onGetPostById = (id) => {
    const getPost = posts.filter((post) => post.id === id)[0];
    setPost({
      title: getPost.title,
      text: getPost.text,
    });
    setEdit(true);
    setPostId(id);
    handleOpen();
  };

  const onEditPostById = (id) => {
    post["id"] = id;
    onEditPost(post);
    handleClose();
  };

  const onRemovePostById = (id) => {
    onRemovePost(id);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setPost({
      title: "",
      text: "",
    });
    setOpen(false);
    setEdit(false);
  };

  return (
    <div className="container">
      <PostList posts={posts} onGetPostById={onGetPostById} />
      <PostModal
        onSubmit={onSubmit}
        onChange={onChange}
        title={title}
        text={text}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        edit={edit}
        postId={postId}
        onEditPostById={onEditPostById}
        onRemovePostById={onRemovePostById}
      />
    </div>
  );
}

export default Posts;
