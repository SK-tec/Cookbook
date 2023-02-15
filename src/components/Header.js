import React from "react";
import {Container} from "react-bootstrap";
import "./NavStyle.css";
import Slideshow from "./Slideshow";
import samatha from "../images/Samatha.jpg";
import tejasvi from "../images/Tejasvi.png";
import ershia from "../images/Ershia.jpg";
import yasser from "../images/Yesser.jpg";
const Header = () => {
  return (
    <>
      <Slideshow />
      <Container className="mt-5">
        <div className="row">
          <div className="col-lg-3">
            <img
              src={samatha}
              className="bd-placeholder-img rounded-circle"
              width="180"
              height="160"
              alt=""
            />
            <h2>Samatha</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
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
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
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
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src={yasser}
              className="bd-placeholder-img rounded-circle"
              width="180"
              height="160"
              alt=""
            />

            <h2>Yasser</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
