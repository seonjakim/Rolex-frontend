import React, { Component } from "react";
import TopNavCancel from "../../Images/TopNavCancel";
import LikeList from "./LikeList";
import "./InSelection.scss";

class InSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { likeList, openSelection, openSelectionHandle } = this.props;
    return (
      <div
        className="InSelection"
        style={{ display: openSelection ? "" : "none" }}
      >
        <div className="windowSelection">
          <div
            className="outMenu"
            onClick={openSelectionHandle}
            style={{ position: "absolute" }}
          >
            <TopNavCancel likeList={likeList.product_preview} />
          </div>
          <div className="inSelectionLeft" onClick={openSelectionHandle}></div>
          <div className="inSelectionRight">
            <div className="container">
              <div className="title">나의 셀렉션</div>
              <div>
                {likeList === null
                  ? `현재 목록이 비어있습니다. 컬렉션을 확인하여 나의 셀렉션을 만들어주시기 바랍니다.`
                  : `나의 셀렉션 편집, 관리 및 공유하기`}
              </div>
              <div className="button">
                {likeList === null
                  ? `내 시계 골라보기`
                  : `나의 셀렉션 공유하기`}
              </div>
              <div className="wathcesList">
                {likeList.product_preview &&
                  likeList.product_preview.map((watch, idx) => (
                    <LikeList
                      key={idx}
                      idx={idx}
                      class={`like${idx}`}
                      data={watch}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InSelection;
