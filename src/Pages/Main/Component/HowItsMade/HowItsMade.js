import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./HowItsMade.scss";

export default class HowItsMade extends Component {
  render() {
    return (
      <div className="howItsMade">
        <div className="txtBox">
          <div className="mainTxt">
            롤렉스 시계는 꼼꼼하게 정성을 들여 조립됩니다.
          </div>
          <p className="subTxt">
            우수한 정확성을 지닌 품격있는 롤렉스 컬렉션에 대해 자세히 알아보시기
            바랍니다. 롤렉스는 프로페셔널 워치부터 클래식 워치까지 어떤 상황에도
            어울리는 다양한 모델을 선보입니다. 스타일과 기능이 완벽하게 어우러진
            롤렉스 시계의 다양한 셀렉션을 만나보시기 바랍니다.
          </p>
          <div className="selectNSetBtn">
            <Link className="selectBtn">시계 골라보기</Link>
            <Link className="setBtn">시계 설정하기</Link>
          </div>
        </div>
      </div>
    );
  }
}
