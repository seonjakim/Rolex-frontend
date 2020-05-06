import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ImgCard from "./ImgCard";
import "./SlideImg.scss";

export default class SlideImg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("props", this.props);
    let cardList = this.props.sub.map((card) => {
      return (
        <ImgCard
          pic={card.small_image}
          name={card.title}
          detail={card.sub_title}
        />
      );
    });
    return (
      <div className="SlideImg">
        <div className="slideContainer">{cardList}</div>
        <div className="scroll"></div>
      </div>
    );
  }
}
