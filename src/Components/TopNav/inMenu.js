import React, { Component } from "react";
import TopNavLogo from "../../Images/TopNavLogo";
import TopNavLanguage from "../../Images/TopNavLanguage";
import TopNavCancel from "../../Images/TopNavCancel";
import "./inMenu.scss";
class InMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="InMenu"
        style={{ display: this.props.openMenu ? "" : "none" }}
      >
        <div className="menuWindow">
          <div
            className="outMenu"
            onClick={this.props.openMenuHandle}
            style={{ position: "absolute" }}
          >
            <TopNavCancel />
          </div>
          <div className="inMenuLeft">
            <div className="first"></div>
            <div className="logo">
              <TopNavLogo />
            </div>
            <div className="slideShow">슬라이드</div>
            <div className="menuList">
              <div>
                <li>롤렉스 컬렉션</li>
                <li>시계 설정하기</li>
                <li>시계 골라보기</li>
                <li>역사 & 워치메이킹</li>
              </div>
              <div>
                <li>롤렉스 세계</li>
              </div>
              <div>
                <li>공식 판매점 찾기</li>
                <li>시계 관리 & 서비스</li>
              </div>
              <div className="org">
                <li>Rolex.org에 대해</li>
              </div>
              <div className="language">
                <TopNavLanguage />
                &nbsp;&nbsp;언어
              </div>
            </div>
          </div>
          <div
            className="inMenuRight"
            onClick={this.props.openMenuHandle}
          ></div>
        </div>
      </div>
    );
  }
}

export default InMenu;
