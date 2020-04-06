import React from 'react';
import PostContainer from '../../containers/PostContainer/PostContainer';
import './City.css';

const City = (props) => {

  // props => city { _id , name, country, photo}
  // console.log(props.city._id);
  // console.log(props)
  return (
    <div className="ui raised segment city" id="city">
      <div className="cityText">
      <h2>{props.city.name}</h2>
      <h3>{props.city.country}</h3>
      </div>
      <img className="ui bordered image" style={{display: "inline-block"}} src={props.city.photo} alt=""/>
      {<PostContainer cityId={props.city._id} user={props.user}/>}
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