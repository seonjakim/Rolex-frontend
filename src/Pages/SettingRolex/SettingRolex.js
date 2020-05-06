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
      data: {
        whichStage: 1,
      },
    };
  }

  setStage = (isIncreasing) => {
    const { whichStage, id } = this.state.data;
    const prev = whichStage;
    if (isIncreasing && prev === 6) {
      this.props.history.push("/");
    }
    if (!isIncreasing && prev === 1) return;
    this.setState({
      data: {
        ...this.state.data,
        whichStage: isIncreasing ? prev + 1 : prev - 1,
      },
    });
  };

  resetStage = () => {
    this.setState({
      data: {
        whichStage: 1,
      },
    });
  };

  handleSelect = (key, value) => {
    this.setState(
      {
        data: {
          ...this.state.data,
          [key]: value,
        },
      },
      () => console.log(this.state.data)
    );
  };

  render() {
    const { whichStage, model } = this.state.data;

    return (
      <div className="SettingRolex">
        <div className="settingZone">
          <div className="configurator">
            {whichStage === 1 && (
              <WatchSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("watch", data)}
              />
            )}
            {whichStage === 2 && (
              <ModelSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("model", data)}
              />
            )}
            {whichStage === 3 && (
              <MatSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("mat", data)}
              />
            )}
            {whichStage === 4 && (
              <BezSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("bez", data)}
              />
            )}
            {whichStage === 5 && model === 36 && (
              <BracSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("brac", data)}
              />
            )}
            {whichStage === 5 && model === 40 && (
              <DialSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("id", data)}
              />
            )}
            {whichStage === 6 && model === 36 && (
              <DialSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("id", data)}
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
              <button onClick={() => this.setStage(true)}>
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
