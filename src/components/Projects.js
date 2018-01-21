import React from 'react';

import unjumble from '../assets/unjumble.png';
import gigly from '../assets/gigly.png';
import musicBox from '../assets/music-box.png';
import viewr from '../assets/viewr.png';

const Projects = () => {
  return(
    <div>
      <section className="work">
        <div className="container">
          <div className="container-padding center margin">
            <h1>My Latest Work</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 container1">
              <div className="img-container">
                <img className="card-img-top image" src={musicBox} alt="Card image cap"></img>
                <div className="overlay text">
                  <h5>Tech Used</h5>
                  {/* <i className="devicon-javascript-plain"></i>
                  <i   className="devicon-react-original-wordmark"></i> */}
                  <p>React, Express.js, SCSS, Bootstrap, MongoDB with Mongoose models, JSX.</p>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Music Box</h5>
                <p className="card-text">An app for musicians to find other musicians or bands to play with in their local area. Bands are also able advertise vacancies. I came up with the idea because of my passion for learning and playing music with others. This is a MERN stack application and makes use of the Google Map and Google Places API.
                </p>
                <button type="button" className="btn btn-outline-info">Launch App</button>
                <button type="button" className="btn btn-outline-info">View Code</button>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 container1">
              <div className="img-container">
                <img className="card-img-top image" src={gigly} alt="Card image cap"></img>
                <div className="overlay text">
                  <h5>Tech Used</h5>
                  {/* <i className="devicon-javascript-plain"></i>
                  <i   className="devicon-react-original-wordmark"></i> */}
                  <p>AngularJS, Spotify API, Ticketmaster API, Google Maps API, Express.js, Gulp, SCSS, HTML5, Bulma, MongoDB with Mongoose models.</p>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Gig.ly</h5>
                <p className="card-text">A social music event app designed for people to chat within groups attending upcoming gigs. This was a team project that involved using Github collaboratively to produce a RESTful MEAN stack app. It combines data from the Ticketmaster and Spotify API to pull in event info and artists top tracks.</p>
                <button type="button" className="btn btn-outline-info">Launch App</button>
                <button type="button" className="btn btn-outline-info">View Code</button>
              </div>
            </div>

            {/* <div className="container col-lg-6 col-sm-12 project item ">
              <a href="https://github.com/siobhanpotter/WDI_PROJECT_4"><img className="project-image item-fade" src={musicBox}></img></a>
            </div>
            <div className="container col-lg-6 col-sm-12 project item">
              <a href=""><img className="project-image" src={gigly}></img></a>
            </div> */}
          </div>



          <div className="row">

            <div className="col-lg-6 col-sm-12 container1">
              <div className="img-container">
                <img className="card-img-top image" src={viewr} alt="Card image cap"></img>
                <div className="overlay text">
                  <h5>Tech Used</h5>
                  {/* <i className="devicon-javascript-plain"></i>
                  <i   className="devicon-react-original-wordmark"></i> */}
                  <p>Express.js with EJS views, jQuery, HTML5, SCSS, Gulp, Bootstrap, MongoDB with Mongoose models and Font Awesome.</p>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Viewr</h5>
                <p className="card-text">A platform for the public to add and review exhibitions they had visited. My background in photography led me to come up with the idea for this app. I utilized the  CRUD/RESTful concepts when creating my first full stack app, getting to know how to use MongoDB and make requests to my API. </p>
                <button type="button" className="btn btn-outline-info">Launch App</button>
                <button type="button" className="btn btn-outline-info">View Code</button>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 container1">
              <div className="img-container">
                <img className="card-img-top image" src={unjumble} alt="Card image cap"></img>
                <div className="overlay text">
                  <h5>Tech Used</h5>
                  {/* <i className="devicon-javascript-plain"></i>
                  <i   className="devicon-react-original-wordmark"></i> */}
                  <p>JavaScript, jQuery, HTML5 and CSS.</p>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Unjmuble This</h5>
                <p className="card-text">The idea of the game is to un-jumble words within a specific time frame, the game becomes more challenging as it progresses and the speed increases. I made this game on week three of the immersive course. For this project, I wanted to consolidate my knowledge of Javascript, jQuery and CSS. </p>
                <button type="button" className="btn btn-outline-info">Launch App</button>
                <button type="button" className="btn btn-outline-info">View Code</button>
              </div>
            </div>

            {/* <div className="col-lg-6 col-sm-12 project item">
              <a href="https://github.com/siobhanpotter/WDI_PROJECT_2"><img className="project-image" src={viewr}></img></a>
            </div>
            <div className="col-lg-6 col-sm-12 project item">
              <a href="https://github.com/siobhanpotter/WDI_PROJECT_1"><img className="project-image" src={unjumble} ></img></a> */}
              {/* <div className="item-overlay top"></div> */}

            </div>

            {/* <div className="col-lg-6 col-sm-12 project item">
              <img src={viewr} className="image-a"></img>
              <div className="overlay">
                <div className="text">
                  <h4>Project 4 - 'Viewer'</h4>
                  <p>A platform for the public to add and review exhibitions they had visited, utilising CRUD/RESTful concepts.</p>
                </div>
              </div>
            </div> */}

          </div>
      </section>
    </div>
  );
};

export default Projects;
