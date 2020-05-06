import React, { Component } from "react";
import "./ImgCard.scss";

export default class ImgCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ImgCard">
        <div className="img">
          <div style={{ backgroundImage: `url(${this.props.pic})` }}></div>
        </div>
        <div className="imgText">
          <div>{this.props.name}</div>
          <div>{this.props.detail}</div>
          <div>자세히보기</div>
        </div>
        {/* <div>
            <span>{this.props.name}</span>
            <span>{this.props.detail}</span>
            <span>자세히 보기</span>
          </div> */}
      </div>
    );
  }
}
