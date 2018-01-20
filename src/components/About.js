import React from 'react';

import me from '../assets/me.jpg';

const About = () => {
  return (
    <div id="About">
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 other-skills">
              <h1 className="primary-colour">About</h1>
              <p>I'm a Web Developer looking to contribute to and learn from a creative team in London. Background in photography and design with technical experience creating and managing content for websites.</p>
              <p>In one of my most recent roles I was involved with creating content and managing the website for an art gallery which sparked my interest in learning to code. After learning as a hobby, I was hooked and wanted to take my interest to the next level. I joined General Assembly to take part in their immersive web-development programme.</p>
              <p>Over the past three months, I have been learning the fundamentals of development and practicing making MEAN and MERN stack apps. I particularly enjoyed working with front-end technologies such as React, CSS & SCSS and jQuery.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 portrait-container">
              <img className="img-responsive portrait" src={me}></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
