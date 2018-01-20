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

            <div className="col-lg-6 col-sm-12 ">
              <div className="img-container">
              <img className="card-img-top" src={musicBox} alt="Card image cap"></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Music Box</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-info">Launch App</button>
                <button type="button" class="btn btn-outline-info">View Code</button>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="img-container">
              <img className="card-img-top" src={gigly} alt="Card image cap"></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Gig.ly</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-info">Launch App</button>
                <button type="button" class="btn btn-outline-info">View Code</button>
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

            <div className="col-lg-6 col-sm-12 ">
              <div className="img-container">
              <img className="card-img-top" src={viewr} alt="Card image cap"></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Viewr</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-info">Launch App</button>
                <button type="button" class="btn btn-outline-info">View Code</button>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="img-container">
              <img className="card-img-top" src={unjumble} alt="Card image cap"></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Unjmuble This</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-info">Launch App</button>
                <button type="button" class="btn btn-outline-info">View Code</button>
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
