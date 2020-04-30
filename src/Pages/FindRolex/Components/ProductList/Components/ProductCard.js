import React from "react";
import FindRolexLike from "../../../../../Images/FindRolexLike";
import "./ProductCard.scss";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`${this.props.class} Card`}
        style={{ gridArea: `main` + this.props.idx }}
      >
        <FindRolexLike />
        <div>
          <img src={this.props.data.img} alt="" />
          <h2>{this.props.data.name}</h2>
          <span>{this.props.data.outline}</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
