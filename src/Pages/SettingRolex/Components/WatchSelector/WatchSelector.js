import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import "./WatchSelector.scss";

export default class WatchSelector extends Component {
  constructor() {
    super();
    this.state = {};
  }

  whenScrolled = () => {};

  render() {
    return (
      <div className="watchSelector" onScroll={this.whenScrolled}>
        <Scrollbar ref={(ref) => (this.scrollbar = ref)} noDefaultStyles>
          <div className="eachWatch">Day-Date</div>
          <div className="eachWatch">Sky-Dweller</div>
          <div className="eachWatch">Datejust</div>
          <div className="eachWatch">Lady-Datejust</div>
          <div className="eachWatch">OP</div>
          <div className="eachWatch">Pearlmaster</div>
          <div className="eachWatch">Cellini</div>
        </Scrollbar>
        <div className="nameContainer">
          <div className="watchName">Day-Date</div>
        </div>
      </div>
    );
  }
}
