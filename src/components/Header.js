import React from "react";
import {Container} from "react-bootstrap";
import "./NavStyle.css";
import Slideshow from "./Slideshow";
import TeamSection from "./TeamSection";
import samatha from "../images/Samatha.jpg";
import tejasvi from "../images/Tejasvi.png";
import ershia from "../images/Ershia.jpg";
import yasser from "../images/Yesser.jpg";

const Header = () => {
  return (
    <>
      <Slideshow />
      <TeamSection />
    </>
  );
};

export default Header;
