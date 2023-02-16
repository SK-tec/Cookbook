import React from 'react';
import samatha from "../images/Samatha.jpg";
import tejasvi from "../images/Tejasvi.jpg";
import ershia from "../images/Ershia.jpg";
import yesser from "../images/Yesser.jpg";
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const TeamSection = () => {

   return (
    <Container className="mt-5">
    <div className="row">
      <div className="col-lg-3">
        {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <img
          src={samatha}
          className="bd-placeholder-img rounded-circle"
          width="180"
          height="160"
          alt=""
        />
        <h2>Samatha</h2>
        <p>
          Degree in Chef's Management Hydrabad India
        </p>
      </div>
      <div className="col-lg-3">
        <img
          src={ershia}
          className="bd-placeholder-img rounded-circle"
          width="180"
          height="160"
          alt=""
        />

        <h2>Ershia</h2>
        <p>
          Degree in Chef's Management Iran
        </p>
      </div>
      <div className="col-lg-3">
        <img
          src={tejasvi}
          className="bd-placeholder-img rounded-circle"
          width="180"
          height="160"
          alt=""
        />

        <h2>Tejasvi</h2>
        <p>
          PG in Chef's Management Mumbai India
        </p>
      </div>
      <div className="col-lg-3">
        <img
          src={yesser}
          className="bd-placeholder-img rounded-circle"
          width="180"
          height="160"
          alt=""
        />

        <h2>Yasser</h2>
        <p>
          PG in Chef's Management in Hotel Syria 
        </p>
      </div>
    </div>
  </Container>
     );
}


export default TeamSection;