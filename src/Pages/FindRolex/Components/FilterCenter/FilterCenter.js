import React, { Component } from "react";
import CategoryIcon from "./Components/CategoryIcon";

import "./FilterCenter.scss";

class FilterCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      materials: [],
      selectedGender: "",
      selectedMaterial: "",
      selectedJewerly: "",
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        const { genders, materials } = res;
        this.setState({
          genders,
          materials,
        });
      });
  };

  selected = (cate, name, idx) => {
    this.setState({
      [name]: cate === idx ? "" : idx,
    });
  };

  resetSelected = () => {
    this.setState({
      selectedGender: "",
    });
  };

  render() {
    const Genders = this.state.genders.map((gender, i) => (
      <CategoryIcon
        key={i}
        name={`gender`}
        idx={i}
        data={gender}
        onClick={() =>
          this.selected(this.state.selectedGender, "selectedGender", i)
        }
        isSelected={i === this.state.selectedGender}
      />
    ));

    const Materials = this.state.materials.map((material, i) => (
      <CategoryIcon
        key={i}
        name={`material`}
        idx={i}
        data={material}
        onClick={() =>
          this.selected(this.state.selectedMaterial, "selectedMaterial", i)
        }
        isSelected={i === this.state.selectedMaterial}
      />
    ));

    return (
      <div className="FilterCenter">
        {Genders}
        {Materials}
        <div className="CategoryItem FilterContainer">
          <div className="FilterBox" onClick={this.props.openFilterHandle} />
          <span>모든 필터</span>
        </div>
      </div>
    );
  }
}

export default FilterCenter;
