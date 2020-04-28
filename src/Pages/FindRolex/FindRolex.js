import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopNav from "../../Components/TopNav/TopNav";
import FilterCenter from "./Components/FilterCenter/FilterCenter";
import ProductList from "./Components/ProductList/ProductList";
import FilterRight from "./Components/FilterRight/FilterRight";
import FindRolexArrow from "../../Images/FindRolexArrow";
import "./FindRolex.scss";

class FindRolex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="FindRolex">
        <TopNav />
        <div className="VideoBox">
          <video
            src={require("./Videos/FindRolexVideoTop.mp4")}
            autoPlay
            loop
            muted
            type="video/mp4"
          />
          <h1 className="VideoText">DAY-DATE</h1>
          <h3 className="VideoText">품격 있는 시계의 상징</h3>
        </div>
        <div className="ContentBox">
          <FilterCenter />
          <ProductList />
          <FilterRight />
          <div className="page">
            페이지 1
            <FindRolexArrow />
          </div>
          <div className="sharebox">shareboxr section</div>
        </div>
        <div className="footer">footer section</div>
      </div>
    );
  }
}

export default withRouter(FindRolex);
