import React, { Component } from "react";
import TopNavCancel from "../../../../Images/TopNavCancel";
import "./FilterModal.scss";

class FilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="FilterModal"
        style={{ display: this.props.openFilter ? "block" : "none" }}
      >
        <div className="FilterWindow">
          <div
            className="filterLeft"
            onClick={this.props.openFilterHandle}
          ></div>
          <div className="filterRight">
            <div className="outFilter" onClick={this.props.openFilterHandle}>
              <TopNavCancel />
            </div>
            <div className="list">
              <div className="title">기준 선택하기</div>
              <div className="section"></div>
            </div>
            <div className="result"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterModal;
