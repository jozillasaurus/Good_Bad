import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Reviews from '../screens/Reviews';
import PostCreate from '../screens/PostCreate';
import PostDetail from '../screens/PostDetail';
import PostEdit from '../screens/PostEdit';
import Posts from '../screens/Posts';
import { getAllReviews } from '../services/review'
import { destroyPost, getAllPosts, postPost, putPost } from '../services/posts'

export default function MainContainer(props) {
  const [reviews, setReviews] = useState([]);
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await getAllReviews();
      setReviews(reviewData);
    }
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchReviews();
    fetchPosts();
  }, [])

  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts(prevState => [...prevState, newPost]);
    history.push('/posts');
  }

  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPosts(prevState => prevState.map(post => {
      return post.id === Number(id) ? updatedPost : post
    }))
    history.push('/posts');
  }

  const handleDelete = async (id) => {
    await destroyPost(id);
    setPosts(prevState => prevState.filter(post => post.id !== id))
  }

  return (
    <Switch>
      <Route path='/reviews'>
        <Reviews reviews={reviews} />
      </Route>
      <Route path='/posts/:id/edit'>
        <PostEdit posts={posts} handleUpdate={handleUpdate} />
      </Route>
      <Route path='/posts/new'>
        <PostCreate handleCreate={handleCreate} />
      </Route>
      {/* Here, we're adding a route for our single food screen */}
      {/* we're passing it "flavors" to use in our drop down form */}
      <Route path='/posts/:id'>
        <PostDetail reviews={reviews} />
      </Route>
      <Route path='/posts'>
        <Posts
          posts={posts}
          handleDelete={handleDelete}
          currentUser={props.currentUser}
        />
      </Route>
    </Switch>
  )
}
