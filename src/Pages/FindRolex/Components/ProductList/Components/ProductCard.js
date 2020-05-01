import React from "react";
import FindRolexLike from "../../../../../Images/FindRolexLike";
import "./ProductCard.scss";

class ProductCard extends React.Component {
  render() {
    const { img, name, oyster, diameter, material, idx } = this.props;
    return (
      <div
        className={`${this.props.class} Card`}
        style={{ gridArea: `main` + idx }}
      >
        <FindRolexLike />
        <div>
          <img src={img} alt="" />
          <h2>{`${name} ${diameter}`}</h2>
          <span>{`${oyster}, ${diameter}mm, ${material}`}</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
