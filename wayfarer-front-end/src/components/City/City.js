import React from 'react';
<<<<<<< HEAD
=======
import PostContainer from '../../containers/PostContainer';

const City = (props) => {

  // props => city { _id , name, country, photo}
  // console.log(props.city._id);
  return (
    <div className="city">
      <h2>{props.city.name}</h2>
      <h3>{props.city.country}</h3>
      <img src={props.city.photo} alt=""/>
      {<PostContainer cityId={props.city._id}/>}
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
>>>>>>> submaster

export default City;