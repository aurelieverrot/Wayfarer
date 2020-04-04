import React from 'react';
import PostContainer from '../../containers/PostContainer';

const City = (props) => {

  // props => city { name, country, photo}
  return (
    <div className="city">
      <h2>{props.city.name}</h2>
      <h3>{props.city.country}</h3>
      <img src={props.city.photo} alt=""/>
      {/* {<PostContainer />} */}
    </div>
  );
  // const posts = props.city.posts.map((post) => {
  //   return(
  //   <li>
  //     <p>{post.title}</p>
  //     <p>{post.body}</p>
  //   </li>
  // )}) 

  // return(
  //   <div>
  //     <h1>{props.city.name}</h1>
  //     <img
  //       src='https://picsum.photos/200/300' />
  //     <ul>
  //       <li>{posts}</li>
  //     </ul>
  //   </div>
  // )
}

export default City;