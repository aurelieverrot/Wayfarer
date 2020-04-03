import React from 'react';
import './About.css'
const About = () => {
    return(
        <>
<div class="ui two column grid">
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div class="content">
        <a class="header">Aurelie Verrot</a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div class="content">
        <a class="header">Jacob Kleiman</a>
      </div>
    </div>
  </div>
  </div>
<div class="ui two column grid">
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div class="content">
        <a class="header">Kristine Ilano</a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img style={{borderRadius: 50+'%'}} src="https://placebear.com/200/200"/>
      </div>
      <div class="content">
        <a class="header">Yulia Tsernant</a>
      </div>
    </div>
  </div>
</div>
</>
    );
}

export default About;