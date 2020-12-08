import React from 'react';
import { Link } from 'react-router-dom';

export default function Posts(props) {
  return (
    <div>
      <h3>Posts</h3>
      {
        props.posts.map(post => (
          <React.Fragment key={post.id}>
            <Link to={`/posts/${post.id}`}><p>{post.name}</p></Link>
            {
              post.user_id === props.currentUser?.id &&
              <>
                <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(post.id)}>Delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/posts/new'><button>Create</button></Link>
    </div>
  )
}
