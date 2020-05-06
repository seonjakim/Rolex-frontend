import React from "react";
import { withRouter } from "react-router-dom";
import FindRolexLike from "../../../../../Images/FindRolexLike";
import "./ProductCard.scss";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  render() {
    const { img, name, oyster, diameter, material, idx, id } = this.props;
    return (
      <div
        className={`${this.props.class} Card`}
        style={{ gridArea: `main` + idx }}
      >
        <FindRolexLike id={id} />
        <div onClick={() => this.props.history.push(`/detail/${id}`)}>
          <img src={img} alt="" />
          <h2>{`${name} ${diameter}`}</h2>
          <span>{`${oyster}, ${diameter}mm, ${material}`}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCard);
