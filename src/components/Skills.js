import React from 'react';

const Skills = () => {
  return(
    <div>
      <section className="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12  dev-skills">
              <h1>Dev Skills / Technologies</h1>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-javascript-plain"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-react-original-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-jquery-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-html5-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i className="devicon-css3-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i className="devicon-bootstrap-plain-wordmark"></i></div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-angularjs-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-nodejs-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-sass-original"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-mongodb-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-express-original-wordmark col-lg-2 col-md-3     col-sm-4ored"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-mocha-plain"></i></div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-github-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i className="devicon-webpack-plain-wordmark col-lg-2 col-md-3 col-sm-4ored"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-ruby-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-rails-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-bower-plain-wordmark"></i></div>
                <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-babel-plain"></i></div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-sm-12 other-skills">
            <h1>Other Skills</h1>
            <div className="extra-height"></div>
          </div> */}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;
