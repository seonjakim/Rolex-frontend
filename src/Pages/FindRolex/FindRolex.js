import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopNav from "../../Components/TopNav/TopNav";
import FilterCenter from "./Components/FilterCenter/FilterCenter";
import ProductList from "./Components/ProductList/ProductList";
import FilterRight from "./Components/FilterRight/FilterRight";
import FindRolexArrow from "../../Images/FindRolexArrow";
import FilterModal from "./Components/FilterModal/FilterModal";
import { BASE_URL } from "../../Config";

import "./FindRolex.scss";

const qs = (queries) => {
  const result = Object.entries(queries)
    .map(([key, value]) => {
      if (value === null || value === undefined) return null;
      return `${key}=${value}`;
    })
    .filter(Boolean)
    .join(`&`);
  return result ? `${result}` : "";
};

class FindRolex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      openFilter: false,
      watches: [],
    };
  }
  componentDidMount() {
    fetch(`${BASE_URL}/product/list?page=1&limit=14`)
      .then((data) => data.json())
      .then((data) => this.setState({ watches: data }));
    this.handleFilter();
  }

  openFilterHandle = () => {
    this.setState({
      openFilter: !this.state.openFilter,
    });
  };

  handleFilter = (data = {}) => {
    const {
      selectedSize: diameter = null,
      selectedMaterial: material = null,
    } = data;
    const queryString = qs({
      diameter,
      material,
    });
    fetch(`${BASE_URL}/product/list?page=1&limit=14&${queryString}`)
      .then((data) => data.json())
      .then((data) => this.setState({ watches: data }));
  };

  render() {
    console.log("hi", this.state.watches);
    return (
      <div className="FindRolex">
        <FilterModal
          openFilter={this.state.openFilter}
          onFilterChange={this.handleFilter}
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
          <FilterCenter
            openFilterHandle={this.openFilterHandle}
            onFilterChange={this.handleFilter}
          />
          <ProductList watches={this.state.watches} />
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
