import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PageShare from "../Main/Component/PageShare/PageShare";
import "./Detail.scss";
import "../Main/Component/PageShare/PageShare.scss";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      watchData: {},
      hover: false,
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/detailData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          watchData: res,
        });
      });
  };

  render() {
    console.log("here", this.state.watchData);
    console.log("here");
    return (
      <div className="detail">
        <div className="mainPicContainer">
          <div className="mainPic"></div>
          <div className="mainPicDesc"></div>
        </div>
        <div className="mainDetail">
          <div className="detailTxt"></div>
        </div>
        <div className="dialPicContainer">
          <div className="dialPic"></div>
        </div>
        <div className="modelDetail">
          <div className="detailContainer">
            <div className="detailTxt"></div>
            <div className="detailCarousel"></div>
          </div>
        </div>
        <div className="rolexRetail">
          <div className="retailContainer">
            <div className="retailPic"></div>
            <div className="retailTxt"></div>
          </div>
        </div>
        <div
          className="collectionWorld"
          onMouseEnter={() => {
            this.setState({ hover: true });
          }}
          onMouseLeave={() => {
            this.setState({ hover: false });
          }}
        >
          <div className={this.state.hover ? "retailPicHover" : "retailPic"} />
          <div className="retailTxt">
            <div className="findRetail">DAY-DATE 세계</div>
            <button className={this.state.hover ? "buttonHover" : "button"}>
              자세히 보기
            </button>
          </div>
        </div>
        <PageShare />
        <footer>Footer</footer>
      </div>
    );
  }
}

export default withRouter(Detail);
