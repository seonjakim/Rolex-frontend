import React, { Component } from "react";
import "./Retailer.scss";

export default class Retailer extends Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <div
        className="retailer"
        onMouseEnter={() => {
          this.setState({ hover: true });
        }}
        onMouseLeave={() => {
          this.setState({ hover: false });
        }}
      >
        <div className={this.state.hover ? "retailPicHover" : "retailPic"} />
        <div className="retailTxt">
          <div className="buyOne">롤렉스 시계 구입</div>
          <div className="findRetail">공식 판매점 찾기</div>
          <button className={this.state.hover ? "buttonHover" : "button"}>
            공식 판매점 찾기
          </button>
        </div>
      </div>
    );
  }
}
