import React from "react";
import TopNavCancel from "../../Images/TopNavCancel";
import "./LikeList.scss";

class LikeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      collection,
      oyster,
      size,
      material,
      thumbnail_image,
    } = this.props.data;
    return (
      <div className="LikeList">
        <TopNavCancel />
        <img src={thumbnail_image} alt="" />
        <h2>{collection}</h2>
        <span>{`${
          oyster ? "오이스터Oyster," : ""
        } ${size}mm, ${material}`}</span>
      </div>
    );
  }
}

export default LikeList;
