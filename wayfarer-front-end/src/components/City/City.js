import React from 'react';
<<<<<<< HEAD
=======
import PostContainer from '../../containers/PostContainer';

const City = (props) => {
  const posts = props.city.posts.map((post) => {
    return(
    <li>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </li>
  )}) 

  return(
    <div>
      <h1>{props.city.name}</h1>
      <img
        src='https://picsum.photos/200/300' />
      <ul>
        <li>{posts}</li>
      </ul>
    </div>
  )
}
>>>>>>> submaster

export default City;