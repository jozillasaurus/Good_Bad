import React from 'react'

export default function Reviews(props) {
  return (
    <div>
      <h3>Your options</h3>
      {
        props.reviews.map(review => (
        <p key={review.id}>{review.name}</p>
        ))
      }
    </div>
  )
}