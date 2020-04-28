import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import WatchSelector from "./Components/WatchSelector/WatchSelector";
import Reload from "../../Images/Reload";
import LeftArrow from "../../Images/LeftArrow";
import RightArrow from "../../Images/RightArrow";
import "./SettingRolex.scss";

class SettingRolex extends Component {
  render() {
    return (
      <div className="SettingRolex">
        <div className="settingZone">
          <div className="configurator">
            <div className="configureStage">
              <div>클래식 시계</div>
              <div>컬렉션 선택하기</div>
              <div>단계 2</div>
            </div>
            <WatchSelector />
          </div>
          <div className="btnSection">
            <div className="btnContainer">
              <button>
                <Reload />
                재설정
              </button>
              <button>
                <LeftArrow />
                이전
              </button>
              <button>
                선택하기
                <RightArrow />
              </button>
              <div className="emptyBuffer" />
            </div>
          </div>
        </div>

        <footer>Footer</footer>
      </div>
    );
  }
}

export default withRouter(SettingRolex);
