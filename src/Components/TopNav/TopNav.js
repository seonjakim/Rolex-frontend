import React, { Component } from "react";
import "./TopNav.scss";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "Nav onTopNav",
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
  render() {
    return (
      <div className="TopNav">
        <div className={this.state.navClass}>
          {/* <div className="menu">메뉴</div> */}
          <div className="NavContainer">
            <div className="leftMenu">
              <div>컬렉션</div>
              <div>롤렉스 세계</div>
              <div>공식 판매점 찾기</div>
            </div>
            <div>로고</div>
            <div className="rightMenu">
              <div>검색하기</div>
              <div>나의 셀렉션</div>
              <div>로그인</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopNav;
