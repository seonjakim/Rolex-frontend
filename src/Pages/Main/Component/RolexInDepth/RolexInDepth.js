import React, { Component } from "react";
import "./RolexInDepth.scss";
import Indepth1 from "./Components/Indepth1";
import Indepth2 from "./Components/Indepth2";

export default class RolexInDepth extends Component {
  constructor() {
    super();
    this.state = {
      indepthData1: [],
      indepthData2: [],
      hover: false,
    };
  }

  componentDidMount = () => {
    this.getData1();
    this.getData2();
  };

  getData1 = () => {
    fetch("http://localhost:3000/data/IndepthData1.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("res.IndepthData1가 이렇게 생겼어요 : ", res.IndepthData1);
        this.setState({ indepthData1: res.IndepthData1 });
      });
  };

  getData2 = () => {
    fetch("http://localhost:3000/data/IndepthData2.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("res.IndepthData2가 이렇게 생겼어요 : ", res.IndepthData2);
        this.setState({ indepthData2: res.IndepthData2 });
      });
  };

  render() {
    let IndepthList1 = this.state.indepthData1.map((indepth1) => {
      return (
        <Indepth1
          pic={indepth1.pic_url}
          name={indepth1.name}
          detail={indepth1.detail}
          link={indepth1.link}
        />
      );
    });
    let IndepthList2 = this.state.indepthData2.map((indepth2) => {
      return (
        <Indepth2
          pic={indepth2.pic_url}
          name={indepth2.name}
          detail={indepth2.detail}
          link={indepth2.link}
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
