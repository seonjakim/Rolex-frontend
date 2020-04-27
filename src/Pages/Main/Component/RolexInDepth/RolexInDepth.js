import React, { Component } from "react";
import "./RolexInDepth.scss";
import IndepthTop from "./Components/IndepthTop";
import IndepthBot from "./Components/IndepthBot";

export default class RolexInDepth extends Component {
  constructor() {
    super();
    this.state = {
      indepthDataTop: [],
      indepthDataBot: [],
    };
  }

  componentDidMount = () => {
    this.getDataTop();
    this.getDataBot();
  };

  getDataTop = () => {
    fetch("http://localhost:3000/data/IndepthDataTop.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(
          "res.IndepthDataTop이 이렇게 생겼어요 : ",
          res.IndepthDataTop
        );
        this.setState({ indepthDataTop: res.IndepthDataTop });
      });
  };

  getDataBot = () => {
    fetch("http://localhost:3000/data/IndepthDataBot.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(
          "res.IndepthDataBot이 이렇게 생겼어요 : ",
          res.IndepthDataBot
        );
        this.setState({ indepthDataBot: res.IndepthDataBot });
      });
  };

  render() {
    let IndepthList1 = this.state.indepthDataTop.map((indepthtopdatum) => {
      return (
        <IndepthTop
          pic={indepthtopdatum.pic_url}
          name={indepthtopdatum.name}
          detail={indepthtopdatum.detail}
          link={indepthtopdatum.link}
        />
      );
    });
    let IndepthList2 = this.state.indepthDataBot.map((indepthbotdatum) => {
      return (
        <IndepthBot
          pic={indepthbotdatum.pic_url}
          name={indepthbotdatum.name}
          detail={indepthbotdatum.detail}
          link={indepthbotdatum.link}
        />
      );
    });

    return (
      <div className="rolexInDepth">
        <div className="depthTxtImg">
          <div className="depthTxt">롤렉스 자세히 보기</div>
          <div className="depthImg">
            <ul>{IndepthList1}</ul>
            <ul>{IndepthList2}</ul>
          </div>
        </div>
      </div>
    );
  }
}
