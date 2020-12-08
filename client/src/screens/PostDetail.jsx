import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addReview } from '../services/review';
import { getOnePost } from '../services/posts';

export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null);
  const [reviewId, setReviewId] = useState('')
  // We can grab the id of the one food from the url params
  const { id } = useParams();

  // In the useEffect, we make an api call to get the one food and set it in local state
  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    }
    fetchPostItem();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postItem = await addReview(reviewId, id);
    // I changed our response on the backend for this route.
    // instead of getting a list of just the flavors,
    // I grab the whole food object with it's flavors
    // This makes it easy to replace our state with the updated data.
    setPostItem(postItem);
  }

  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
  const handleChange = (e) => {
    const { value } = e.target;
    setReviewId(value);
  }

  return (
    <div>
      <h3>{postItem?.name}</h3>
      {postItem?.reviews.map(post => (
        <p key={post.id}>{post.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select defaultValue='default' onChange={handleChange}>
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>-- Select an option --</option>
          {/* now we loop over all flavors and return an <option> tag for each */}
          {props.reviews.map(review => (
            // we track the flavor's id as the "value" which will get added to state onChange
            // the flavor's name goes between the open and close tag which is what the user sees
            <option value={review.id} key={review.id}>{review.name}</option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  )
}