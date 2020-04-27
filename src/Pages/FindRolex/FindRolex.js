import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FilterCenter from "./Components/FilterCenter/FilterCenter";
import ProductList from "./Components/ProductList/ProductList";
import FilterRight from "./Components/FilterRight/FilterRight";

import "./FindRolex.scss";

class FindRolex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="FindRolex">
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
            <svg
              aria-labelledby=""
              height="11"
              width="11"
              viewBox="0 0 11 11"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <path d="m3.3 11-1.4-1.5 4.2-4-4.2-4 1.4-1.5 5.7 5.5z"></path>
            </svg>
          </div>

          <div className="sharebox">shareboxr section</div>
        </div>
        <div className="footer">footer section</div>
      </div>
    );
  }
}

export default withRouter(FindRolex);
