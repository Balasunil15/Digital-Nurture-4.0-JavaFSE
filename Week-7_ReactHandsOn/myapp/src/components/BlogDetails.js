
import React from 'react';

function BlogDetails(props) {
  return (
    <div>
      {props.blogs.length > 0 ? (
        props.blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}

export default BlogDetails;
