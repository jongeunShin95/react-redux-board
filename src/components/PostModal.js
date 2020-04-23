import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PostForm from './PostForm';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function PostModal({ onSubmit, onChange, title, text, open, handleOpen, handleClose, edit, postId, onEditPostById, onRemovePostById }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const post = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">등록</h2>
      <PostForm onChange={onChange} title={title} text={text} />
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">등록</button>
      </form>
    </div>
  );

  const postEdit = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">내용</h2>
        <PostForm onChange={onChange} title={title} text={text} />
        <button onClick={() => onEditPostById(postId)} className="btn btn-success">수정하기</button>
        <button onClick={() => onRemovePostById(postId)} className="btn btn-danger">삭제하기</button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className="btn btn-primary">
        등록
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {edit ? postEdit : post}
      </Modal>
    </div>
  );
}