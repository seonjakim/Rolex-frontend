import React from "react";
import './CategoryIcon.scss'

class CategoryIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

  render() {
    console.log(this.props.idx);
    return (
      <div
        className={
          this.props.isSelected ? 
          [`select ${this.props.name}${this.props.idx}`] : 
          [`CategoryItem ${this.props.name}${this.props.idx}`]}
        // className={[this.props.isSelected && "select", "CategoryItem"].filter(Boolean).join(" ")}
          onClick={this.props.onClick}
      >
        {/* <div
          className={[this.props.isSelected && "border", "icon"]
            .filter(Boolean).join(" ")}
        > */}
         <img src={this.props.data.img} alt=""/>
        {/* </div> */}
        <span>{this.props.data.title}</span>
      </div>
    );
  }
}

export default CategoryIcon;
