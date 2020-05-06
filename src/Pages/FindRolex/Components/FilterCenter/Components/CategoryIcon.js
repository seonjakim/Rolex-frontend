import React from "react";
import "./CategoryIcon.scss";

class CategoryIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.isSelected
            ? [`select ${this.props.name}${this.props.idx}`]
            : [`CategoryItem ${this.props.name}${this.props.idx}`]
        }
        onClick={this.props.onClick}
      >
        <img src={this.props.data.img} alt="" />
        <span>{this.props.data.title}</span>
      </div>
    );
  }
}

export default CategoryIcon;
