import React from 'react';

const Contact = () => {
  return (
    <div id="Contact">
      <section className="contact">
        <h1>Contact Me</h1>
        <div className="container">
          <div className="col-4"></div>
          <div className="row">
            <div className="col"><a href="mailto:siobhanpotter.a@gmail.com"><h6>Email</h6></a></div>
            <div className="col"><a href="https://www.linkedin.com/in/siobhanpotter/"><h6>LinkedIn</h6></a></div>
            <div className="col"><a href="https://github.com/siobhanpotter"><h6>Github</h6></a></div>
          </div>
        </div>
        <div className="col-4"></div>
      </section>
    </div>
  );
};

export default Contact;
