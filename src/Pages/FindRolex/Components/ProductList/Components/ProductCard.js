import React from "react";
import "./ProductCard.scss";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={this.props.className + ` Card`}
        style={{ gridArea: `main` + this.props.idx }}
      >
        <svg
          aria-labelledby=""
          height="15"
          width="15"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path d="m14.98 5.65c-.24 2.59-3.18 6.01-7.48 8.6-4.3-2.59-7.24-6.01-7.48-8.6s1.73-4.9 4.16-4.9 3.32 1.76 3.32 1.76.88-1.76 3.32-1.76 4.4 2.31 4.16 4.9z"></path>
        </svg>
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
