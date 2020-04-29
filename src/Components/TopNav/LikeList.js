import React from "react";
import TopNavCancel from "../../Images/TopNavCancel";
import "./LikeList.scss";

class LikeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="LikeList">
        <TopNavCancel />
        <img src={this.props.data.img} alt="" />
        <h2>{this.props.data.name}</h2>
        <span>{this.props.data.outline}</span>
      </div>
    );
  }
}

export default LikeList;
