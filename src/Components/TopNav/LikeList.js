import React from "react";
import TopNavCancel from "../../Images/TopNavCancel";
import "./LikeList.scss";

class LikeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { img, name, outline } = this.props.data;
    return (
      <div className="LikeList">
        <TopNavCancel />
        <img src={img} alt="" />
        <h2>{name}</h2>
        <span>{outline}</span>
      </div>
    );
  }
}

export default LikeList;
