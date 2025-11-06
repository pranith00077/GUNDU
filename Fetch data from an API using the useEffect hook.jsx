import React, { useState, useEffect } from 'react';
function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setPost(data));
  }, []);

  return (
    <div>
      <h1>Fetching Data with useEffect</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
}
export default App;
