import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const postItem = props.posts.find(post => post.id === Number(id));
      setFormData({
        name: postItem.name
      })
    }
    if (props.posts.length){
      prefillForm();
    }
  }, [props.posts])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
    }}>
      <h3>Edit Post</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
