import React, { Component } from "react";
import TopNavLogo from "../../Images/TopNavLogo";
import TopNavSearch from "../../Images/TopNavSearch";
import TopNavLike from "../../Images/TopNavLike";
import TopNavEnter from "../../Images/TopNavEnter";
import TopNavMenu from "../../Images/TopNavMenu";
import InMenu from "./inMenu";
import "./TopNav.scss";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "Nav onTopNav",
      openMenu: false,
      point: [0, 0],
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    const scrollPoint = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.state.point.unshift(scrollPoint);
    this.state.point.splice(2, 2);

    if (this.state.point[0] === 0) {
      this.setState({
        navClass: "Nav onTopNav",
      });
    } else if (
      this.state.point[0] > this.state.point[1] &&
      this.state.point[0] !== 0
    ) {
      this.setState({
        navClass: "Nav MiddleNav ScrollDown",
      });
    } else if (this.state.point[0] < this.state.point[1]) {
      this.setState({
        navClass: "Nav MiddleNav ScrollUp",
      });
    }
  };

  openMenuHandle = () => {
    this.setState({
      openMenu: !this.state.openMenu,
    });
  };

  render() {
    return (
      <div className="TopNav">
        <InMenu
          openMenu={this.state.openMenu}
          openMenuHandle={this.openMenuHandle}
        />
        <div className={this.state.navClass}>
          <div className="NavContainer">
            <div className="leftMenu">
              <div className="menu" onClick={this.openMenuHandle}>
                <TopNavMenu />
                메뉴
              </div>
              <div>컬렉션</div>
              <div>롤렉스 세계</div>
              <div>공식 판매점 찾기</div>
            </div>
            <div className="logo">
              <TopNavLogo />
            </div>
            <div className="rightMenu">
              <div>
                <TopNavSearch />
                검색하기
              </div>
              <div>
                <TopNavLike />
                나의 셀렉션
              </div>
              <div>
                <TopNavEnter />
                로그인
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
