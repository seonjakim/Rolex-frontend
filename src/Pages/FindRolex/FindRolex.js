import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopNav from "../../Components/TopNav/TopNav";
import FilterCenter from "./Components/FilterCenter/FilterCenter";
import ProductList from "./Components/ProductList/ProductList";
import FilterRight from "./Components/FilterRight/FilterRight";
import FindRolexArrow from "../../Images/FindRolexArrow";
import PageShare from "../Main/Component/PageShare/PageShare";
import { API_URL } from "../../Config";
import { FindRolex_URL } from "../../Config";

import "./FindRolex.scss";

class FindRolex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      openFilter: false,
      watches: [],
      diameter: "",
      material: "",
    };
  }
  componentDidMount() {
    fetch(`${FindRolex_URL}/product/list?page=1&limit=14`)
      .then((data) => data.json())
      .then((data) => this.setState({ watches: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.diameter !== this.state.diameter ||
      prevState.material !== this.state.material
    ) {
      const { diameter, material } = this.state;
      let queryString;

      if (!diameter && !material) {
        queryString = "";
      } else if (!diameter) {
        queryString = `&material=${material}`;
      } else if (!material) {
        queryString = `&diameter=${diameter}`;
      } else if (diameter && material) {
        queryString = `&diameter=${diameter}&material=${material}`;
      }

      fetch(`${FindRolex_URL}/product/list?page=1&limit=14&${queryString}`)
        .then((data) => data.json())
        .then((data) => this.setState({ watches: data }));
    }
  }

  filterChangeHandler = (value) => {
    if (value === this.state.diameter) {
      this.setState({ diameter: "" });
    } else if (value === this.state.material) {
      this.setState({ material: "" });
    } else {
      if (typeof value === "number") {
        this.setState({ diameter: value });
      } else {
        this.setState({ material: value });
      }
    }
  };

  render() {
    return (
      <div className="FindRolex">
        {/* <FilterModal
          openFilter={this.state.openFilter}
          onFilterChange={this.handleFilter}
        /> */}
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
          <FilterCenter onFilterChange={this.filterChangeHandler} />
          <ProductList watches={this.state.watches} />
          <FilterRight />
          <div className="page">
            페이지 1
            <FindRolexArrow />
          </div>
          <PageShare />
        </div>
      </div>
    );
  }
}

export default withRouter(FindRolex);
