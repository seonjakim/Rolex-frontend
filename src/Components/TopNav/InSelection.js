import React, { Component } from "react";
import TopNavCancel from "../../Images/TopNavCancel";
import LikeList from "./LikeList";
import "./InSelection.scss";

class InSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: [],
    };
  }
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          like: res.watches,
        });
      });
  };
  render() {
    const likeWatches = this.state.like.map((watch, idx) => (
      <LikeList key={idx} idx={idx} class={`like${idx}`} data={watch} />
    ));
    return (
      <div
        className="InSelection"
        style={{ display: this.props.openSelection ? "" : "none" }}
      >
        <div className="windowSelection">
          <div
            className="outMenu"
            onClick={this.props.openSelectionHandle}
            style={{ position: "absolute" }}
          >
            <TopNavCancel />
          </div>
          <div
            className="inSelectionLeft"
            onClick={this.props.openSelectionHandle}
          ></div>
          <div className="inSelectionRight">
            <div className="container">
              <div className="title">나의 셀렉션</div>
              <div>
                {this.state.like.length === 0
                  ? `현재 목록이 비어있습니다. 컬렉션을 확인하여 나의 셀렉션을 만들어주시기 바랍니다.`
                  : `나의 셀렉션 편집, 관리 및 공유하기`}
              </div>
              <div className="button">
                {this.state.like.length === 0
                  ? `내 시계 골라보기`
                  : `나의 셀렉션 공유하기`}
              </div>
              <div className="wathcesList">{likeWatches}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InSelection;
