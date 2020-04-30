import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import WatchSelector from "./Components/WatchSelector/WatchSelector";
import ModelSelector from "./Components/ModelSelector/ModelSelector";
import MatSelector from "./Components/MatSelector/MatSelector";
import BezSelector from "./Components/BezSelector/BezSelector";
import BracSelector from "./Components/BracSelector/BracSelector";
import DialSelector from "./Components/DialSelector/DialSelector";
import Reload from "../../Images/Reload";
import LeftArrow from "../../Images/LeftArrow";
import RightArrow from "../../Images/RightArrow";
import "./SettingRolex.scss";

class SettingRolex extends Component {
  constructor() {
    super();
    this.state = {
      whichStage: 1,
      isClicked: false,
      data: {},
    };
  }

  setStage = (isIncreasing) => {
    const prev = this.state.whichStage;
    if (isIncreasing && prev === 6) return;
    if (!isIncreasing && prev === 1) return;
    this.setState({
      whichStage: isIncreasing ? prev + 1 : prev - 1,
    });
  };

  resetStage = () => {
    this.setState({
      whichStage: 1,
    });
  };

  handleSelect = (key, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [key]: value,
      },
    });
    console.log(this.state.data);
  };

  render() {
    const { whichStage } = this.state;

    return (
      <div className="SettingRolex">
        <div className="settingZone">
          <div className="configurator">
            {whichStage === 1 && (
              <WatchSelector
                onSelect={(data) => this.handleSelect("watch", data)}
              />
            )}
            {whichStage === 2 && (
              <ModelSelector
                onSelect={(data) => this.handleSelect("model", data)}
              />
            )}
            {whichStage === 3 && (
              <MatSelector
                onSelect={(data) => this.handleSelect("mat", data)}
              />
            )}
            {whichStage === 4 && (
              <BezSelector
                onSelect={(data) => this.handleSelect("bez", data)}
              />
            )}
            {whichStage === 5 && (
              <BracSelector
                onSelect={(data) => this.handleSelect("brac", data)}
              />
            )}
            {whichStage === 6 && (
              <DialSelector
                onSelect={(data) => this.handleSelect("dial", data)}
              />
            )}
          </div>
          <div className="btnSection">
            <div className="btnContainer">
              <button onClick={this.resetStage}>
                <Reload />
                재설정
              </button>
              <button onClick={() => this.setStage(false)}>
                <LeftArrow />
                이전
              </button>
              <button
                onClick={
                  () => this.setStage(true)
                  // ,
                  // this.setState({ isClicked: true })
                }
              >
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
