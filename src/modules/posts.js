const ADD_POST = "posts/ADD_POST";
const EDIT_POST = "posts/EDIT_POST";
const DELETE_POST = "posts/DELETE_POST";

let nextId = 2;

export const addPost = (post) => ({
  type: ADD_POST,
  post: {
    id: nextId++,
    title: post.title,
    text: post.text,
  },
});

export const editPost = (post) => ({
  type: EDIT_POST,
  post: {
    id: post.id,
    title: post.title,
    text: post.text,
  },
});

export const removePost = (id) => ({
  type: DELETE_POST,
  id,
});

const initialState = [
  {
    id: 1,
    title: "test",
    text: "test",
  },
];

export default function posts(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return state.concat(action.post);
    case EDIT_POST:
      return state.map((post) =>
        post.id === action.post.id
          ? { ...post, title: action.post.title, text: action.post.text }
          : post
      );
    case DELETE_POST:
        return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
}
