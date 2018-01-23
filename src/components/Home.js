import React from 'react';

import '../scss/style.scss';
// import logoOutline from '../assets/OUTLINE.png';
import logoGrey from '../assets/GREY.png';

const Home = () => {

  return (
    <div id="Home">
      <section className="header">
        <div className="col-12  title">
          <div className="title-name">
            <h4>SIOBHAN POTTER</h4>
            <h6>Web Developer | Creative | Music Lover</h6>
          </div>
        </div>
        {/* <img className="img-responsive logo-outline" src={logoGrey}></img> */}
        <div className="intro fade-in one">
          <p className="element"><span>Hi, I'm Siobhan,</span><br/> I'm a web developer   based in London. Check out my work, find out more about me & get in   touch.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
