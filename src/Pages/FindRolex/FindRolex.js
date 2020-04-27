import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FilterCenter from "./Components/FilterCenter/FilterCenter";
import ProductList from "./Components/ProductList/ProductList";
import FilterRight from "./Components/FilterRight/FilterRight";

import "./FindRolex.scss";

class FindRolex extends Component {
  constructor(props){
    super(props);
    this.state = {
      genders : [],
      materials : [],

    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          genders: res.genders,
          materials: res.materials,
        })
      })
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
          <FilterCenter 
          genders={this.state.genders}
          materials={this.state.materials}
          />
          <ProductList
          watches={this.state.watches}
          />
          <FilterRight />
          <div className="sharebox"></div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default withRouter(FindRolex);
