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
      bgImg:
        "https://content.rolex.com/dam/2019/bg/model-cover-background-yellow-gold.jpg?imwidth=1920",
    };
  }

  setStage = (isIncreasing) => {
    const { whichStage, id, model } = this.state.data;
    const prev = whichStage;
    if (
      isIncreasing &&
      ((prev === 5 && model === 40) || (prev === 6 && model === 36))
    ) {
      this.props.history.push(`/${id}`);
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

  handleBg = (bg) => {
    this.setState({ bgImg: bg });
  };

  render() {
    const { whichStage, model } = this.state.data;
    const { bgImg } = this.state;

    return (
      <div className="SettingRolex">
        <div
          className="settingZone"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="configurator">
            {whichStage === 1 && (
              <WatchSelector
                data={this.state.data}
                onSelect={(data) => this.handleSelect("watch", data)}
                changeBg={(bg) => this.handleBg(bg)}
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
                changeBg={(bg) => this.handleBg(bg)}
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
