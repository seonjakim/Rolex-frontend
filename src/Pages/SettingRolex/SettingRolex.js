import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SettingRolex.scss";

class SettingRolex extends Component {
  render() {
    return (
      <div className="SettingRolex">
        <div className="settingZone">
          <div className="configurator">
            <p></p>
            <p></p>
            <p></p>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="btnSection">
            <div className="btnContainer">
              <button></button>
              <button></button>
              <button></button>
              <div className="emptyBuffer" />
            </div>
          </div>
        </div>

        <div>Footer</div>
      </div>
    );
  }
}

export default withRouter(SettingRolex);
