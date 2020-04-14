const ADD_POST = 'posts/ADD_POST';
const EDIT_POST = 'posts/EDIT_POST';
const DELETE_POST = 'posts/DELETE_POST';

let nextId = 2;

export const addPost = (post) => ({
    type: ADD_POST,
    post: {
        id: nextId++,
        title: post.title,
        text: post.text
    }
});

const initialState = [
    {
        id: 1,
        title: 'test',
        text: 'test'
    }
]

export default function posts(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return state.concat(action.post);
        default:
            return state;
    }
}