import React from 'react';
import './About.css'

const About = () => {
    return(
        <>
<div className="ui two column grid">
  <div className="column left">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://media-exp1.licdn.com/dms/image/C5603AQFQOSR03BZmZQ/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=l3UIMlPiQXFzJuj9nrzw8lfRkYJ5gF9K56JK2zz-DYA"/>
      </div>
      <div className="content">
        <h2 className="header">Aurelie Verrot</h2>
      <div class="meta">
        <p>from Lyon, France</p>
      </div>
      </div>
    </div>
  </div>
  <div className="column right">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://media-exp1.licdn.com/dms/image/C5603AQHvLQgHp_uQag/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=SIzbO6IJVFfGils6z-eaZBBJrq9lMs8726wUDovPsDc"/>
      </div>
      <div className="content">
        <h2 className="header">Jacob Kleiman</h2>
        <div class="meta">
        <p>from Los Angeles, USA</p>
      </div>
      </div>
    </div>
  </div>
  </div>
<div className="ui two column grid">
  <div className="column left">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://media-exp1.licdn.com/dms/image/C4E03AQErMDi68sOTvQ/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=oGh02HUv9gjJBY6vfLRAfyqrxqBDbM9wwSYQO03p3ts"/>
      </div>
      <div className="content">
        <h2 className="header">Kristine Ilano</h2>
        <div class="meta">
        <p>from South City, USA</p>
      </div>
      </div>
    </div>
  </div>
  <div className="column right">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://media-exp1.licdn.com/dms/image/C4D03AQEL7jRwKsvNqA/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=JGn0mgkbPH8bJr6H0Rz0IPBQNBaLcr8Xinthi2UUIwQ"/>
      </div>
      <div className="content">
        <h2 className="header">Yulia Tsernant</h2>
        <div class="meta">
        <p>from Russia</p>
      </div>
      </div>
    </div>
  </div>
</div>
</>
    );
}

export default About;