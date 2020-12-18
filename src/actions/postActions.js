import { FETCH_POSTS, NEW_POSTS } from "./types";

// Old way of writing this!
// export function fetchPosts() {
//   return function (dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((resp) => resp.json())
//       .then((posts) =>
//         dispatch({
//           type: FETCH_POSTS,
//           payload: posts,
//         })
//       )
//       .catch((err) => console.log("Request Failed", err)); // Catch errors
//   };
// }

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    )
    .catch((err) => console.log("Request Failed", err)); // Catch errors
};

export const createPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((resp) => resp.json())
    .then((post) =>
      dispatch({
        type: NEW_POSTS,
        payload: post,
      })
    );
};
