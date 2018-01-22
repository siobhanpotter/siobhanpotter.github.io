import React from 'react';

import architecture from '../assets/interests/architecture.jpg';
import coding from '../assets/interests/coding.jpg';
import guitar from '../assets/interests/guitar.jpg';
import photography from '../assets/interests/photography.jpg';
import pottery from '../assets/interests/pottery.jpg';
import cycling from '../assets/interests/cycling.jpg';


const Interests = () => {
  return(
    <div>
      <section className="container" id="interests-section">
        {/* <div className="container"> */}

            <div className="col-lg-12 col-sm-12">
              <div className="row">
              <h1 id="interests-title">Interests</h1>
              <div className="row">

                <div className="col-lg-4 col-md-6 col-sm-6 padding-0">
                  <div className="interests">
                  <img className="card-img-top image" src={coding} alt="Card image cap"></img>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 padding-0">
                  <div className="interests">
                    <img className="card-img-top image" src={pottery} alt="Card image cap"></img>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 padding-0">
                  <div className="interests">
                    <img className="card-img-top image" src={guitar} alt="Card image cap"></img>
                  </div>
                </div>

              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 padding-0">
                  <div className="interests">
                    <img className="card-img-top image" src={photography} alt="Card image cap">
                    </img>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 padding-0">
                  <div className="interests">
                    <img className="card-img-top image" src={cycling} alt="Card image cap">
                    </img>
                  </div>
                </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 padding-0">
                    <div className="interests">
                      <img className="card-img-top image" src={architecture} alt="Card image cap">
                      </img>
                    </div>
                  </div>

              </div>

            </div>
        </div>
      {/* </div> */}
    </section>
    </div>
  );
};

export default Interests;
