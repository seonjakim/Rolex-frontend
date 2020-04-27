import React, { Component } from "react";
import CategoryIcon from "./Components/CategoryIcon";
import "./FilterCenter.scss";

class FilterCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender : "",
      selectedMaterial : "",
      selectedJewerly : ""
    };
  }

  selected = (cate, name, idx) => {
    cate === idx ?
    this.setState({
      [name] : ""
    }) :
    this.setState({
      [name]: idx
    })
  }

  resetSelected = () => {
    this.setState({
      selectedGender : ""
    })
  }

  render() {
    const Genders = this.props.genders.map((gender, i) => (
      <CategoryIcon
        key={i}
        name={`gender`}
        idx={i}
        data={gender}
        onClick={() => this.selected(this.state.selectedGender, "selectedGender", i)}
        isSelected={i === this.state.selectedGender}
      />
    ));

    const Materials = this.props.materials.map((material, i) => (
      <CategoryIcon
        key={i}
        name={`material`}
        idx={i}
        data={material}
        onClick={() => this.selected(this.state.selectedMaterial, "selectedMaterial", i)}
        isSelected={i === this.state.selectedMaterial}
      />
    ));

    return (
      <div className="FilterCenter">
        {Genders}
        {Materials}
        <div className="CategoryItem FilterContainer">
            <div className="FilterBox"/>
            <span>모든 필터</span>
          </div>
      </div>
    );
  }
}


export default FilterCenter;
