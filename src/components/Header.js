import React from "react";
import {Container} from "react-bootstrap";
import "./NavStyle.css";
import Slideshow from "./Slideshow";
import TeamSection from "./TeamSection";
import samatha from "../images/Samatha.jpg";
import tejasvi from "../images/Tejasvi.png";
import ershia from "../images/Ershia.jpg";
import yasser from "../images/Yesser.jpg";
import RecipeGrid from "./RecipeGrid";

const Header = ({books}) => {
  return (
    <>
      <Slideshow />
      <TeamSection />
      <RecipeGrid books={books}/>
    </>
  );
};

export default Header;
