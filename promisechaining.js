//Promise chaining is a technique used in JavaScript to chain multiple asynchronous operations together using Promises. 
//It allows you to execute a sequence of asynchronous tasks one after the other in a more readable and organized manner. Promise chaining ensures that each operation waits for the previous one to complete before starting its execution.

//To understand promise chaining, let's go through an example step by step:

//Suppose we have three asynchronous functions that simulate fetching data from a server with a delay using Promises:

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve([
          { id: 101, title: "Post 1" },
          { id: 102, title: "Post 2" },
        ]);
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1500);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId === 101) {
        resolve([
          { id: 201, text: "Comment 1" },
          { id: 202, text: "Comment 2" },
        ]);
      } else {
        reject(new Error("Invalid post ID"));
      }
    }, 2000);
  });
}
//Now, let's chain these asynchronous functions together using promise chaining:

fetchUserData()
  .then((user) => {
    console.log("User:", user);
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchPostComments(posts[0].id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


