import React from "react";
import TopNavCancel from "../../Images/TopNavCancel";
import "./LikeList.scss";

class LikeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      collection,
      oyster,
      size,
      material,
      thumbnail_image,
      product_id,
    } = this.props.data;
    console.log(this.state.click);
    return (
      <div className="LikeList">
        <TopNavCancel id={product_id} />
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
