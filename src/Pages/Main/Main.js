import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RolexInDepth from "./Component/RolexInDepth/RolexInDepth";
import Retailer from "./Component/Retailer/Retailer";
import PageShare from "./Component/PageShare/PageShare";
import HowItsMade from "./Component/HowItsMade/HowItsMade";
import ShowCollection from "./Component/ShowCollection/ShowCollection";
import MovingArrow from "../../Images/MovingArrow";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="videoBox">
          <video
            src="https://content.rolex.com/dam/homepage/hss/watches/classic-watches/day-date/day-date-40/homepage-day-date-40-m228238-0042.mp4"
            type="video/mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="sc-pRTZB jXSwJn"
          />
          <div className="videoTitle">
            <div>DAY-DATE</div>
            <div>품격 있는 시계의 상징</div>
          </div>
          <div className="animeArrow">
            <span>
              <MovingArrow />
            </span>
          </div>
        </div>

        <HowItsMade />

        <ShowCollection />

        <div className="saveThePlanet">
          <video
            src="https://content.rolex.com/dam/homepage/video-banner/rolex-org/globe/homepage-dotcom-globe.mp4"
            type="video/mp4"
            autoPlay
            muted
            playsInline=""
            loop
            preload="auto"
            className="sc-pRTZB jXSwJn"
          />
          <a
            className="planetTxt"
            href="https://www.rolex.org/ko/environment"
            target="_blank"
          >
            <div>Rolex.org</div>
            <div>지구를 지키기 위한 프로젝트</div>
            <div>영감을 주는 이야기</div>
          </a>
        </div>

        <RolexInDepth />

        <Retailer />

        <PageShare />
      </div>
    );
  }
}

export default withRouter(Main);
