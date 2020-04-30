import React from "react";
import FindRolexLike from "../../../../../Images/FindRolexLike";
import "./ProductCard.scss";

class ProductCard extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.class} Card`}
        style={{ gridArea: `main` + this.props.idx }}
      >
        <FindRolexLike />
        <div>
          <img src={this.props.img} alt="" />
          <h2>{`${this.props.name} ${this.props.diameter}`}</h2>
          <span>{`${this.props.oyster}, ${this.props.diameter}mm, ${this.props.material}`}</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
