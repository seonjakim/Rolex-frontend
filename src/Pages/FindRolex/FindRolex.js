import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopNav from "../../Components/TopNav/TopNav";
import FilterCenter from "./Components/FilterCenter/FilterCenter";
import ProductList from "./Components/ProductList/ProductList";
import FilterRight from "./Components/FilterRight/FilterRight";
import FindRolexArrow from "../../Images/FindRolexArrow";
import FilterModal from "./Components/FilterModal/FilterModal";

import "./FindRolex.scss";

class FindRolex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      openFilter: false,
    };
  }
  openFilterHandle = () => {
    this.setState({
      openFilter: !this.state.openFilter,
    });
  };
  render() {
    return (
      <div className="FindRolex">
        <FilterModal
          openFilter={this.state.openFilter}
          openFilterHandle={this.openFilterHandle}
        />
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
          <FilterCenter openFilterHandle={this.openFilterHandle} />
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
