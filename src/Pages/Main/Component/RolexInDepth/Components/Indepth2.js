import React, { Component } from "react";

export default class Indepth2 extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }
  render() {
    return (
      <a href={this.props.link}>
        <li
          onMouseEnter={() => {
            this.setState({ hover: true });
          }}
          onMouseLeave={() => {
            this.setState({ hover: false });
          }}
        >
          <div
            className={this.state.hover ? "depthPicHover" : "depthPic"}
            style={{ backgroundImage: `url(${this.props.pic})` }}
          ></div>
          <figcaption
            className={this.state.hover ? "depthTitleHover" : "depthTitle"}
          >
            <span>{this.props.name}</span>
            <span>{this.props.detail}</span>
            <span>자세히 보기</span>
          </figcaption>
        </li>
      </a>
    );
  }
}
