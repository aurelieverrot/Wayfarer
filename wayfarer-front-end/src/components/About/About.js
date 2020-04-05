import React from 'react';
import './About.css'
const About = () => {
    return(
        <>
<div className="ui two column grid">
  <div className="column">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div className="content">
        <a className="header">Aurelie Verrot</a>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div className="content">
        <a className="header">Jacob Kleiman</a>
      </div>
    </div>
  </div>
  </div>
<div className="ui two column grid">
  <div className="column">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div className="content">
        <a className="header">Kristine Ilano</a>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="ui fluid card">
      <div className="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div className="content">
        <a className="header">Yulia Tsernant</a>
      </div>
    </div>
  </div>
</div>
</>
    );
}

export default About;