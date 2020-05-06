import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopNavLogo from "../../Images/TopNavLogo";
import TopNavLanguage from "../../Images/TopNavLanguage";
import TopNavCancel from "../../Images/TopNavCancel";
import CollectionDisplay from "./CollectionDisplay";
import "./inMenu.scss";
class InMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionData: [],
    };
  }
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/CollectionData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ collectionData: res.CollectionData });
      });
  };
  goTo(location) {
    this.props.history.push(location);
    this.props.openMenuHandle();
  }
  render() {
    const { openMenu, openMenuHandle } = this.props;
    return (
      <div className={openMenu ? "InMenu" : "InMenu open"}>
        <div className="menuWindow">
          <div className="outMenu" onClick={openMenuHandle}>
            <TopNavCancel />
          </div>
          <div className="inMenuLeft">
            <div className="first"></div>
            <a href="#" onClick={() => this.goTo("/")}><div className="logo">
              <TopNavLogo />
            </div></a>
            <div className="slideShow">
              <CollectionDisplay />
            </div>
            <div className="menuList">
              <div>
                <a href="#" onClick={() => this.goTo("/collection")}><li>롤렉스 컬렉션</li></a>
                <a href="#" onClick={() => this.goTo("/settingrolex")}><li>
                  시계 설정하기
                </li></a>
                <a href="#" onClick={() => this.goTo("/findrolex")}><li>시계 골라보기</li></a>
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
          <div className="inMenuRight" onClick={openMenuHandle}></div>
        </div>
      </div>
    );
  }
}

export default withRouter(InMenu);
