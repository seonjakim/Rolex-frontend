import React, { Component } from "react";
import CategoryIcon from "./Components/CategoryIcon";

import "./FilterCenter.scss";

class FilterCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      materials: [],
      selectedSize: null,
      selectedMaterial: null,
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
        const { sizes, materials } = res;
        this.setState({
          sizes,
          materials,
        });
      });
  };

  // selected = (cate, name, idx) => {
  //   this.setState(
  //     {
  //       [name]: cate === idx ? "" : idx,
  //     },
  //     () => {
  //       const { selectedSize, selectedMaterial } = this.state;
  //       this.props.onFilterChange &&
  //         this.props.onFilterChange({
  //           selectedSize,
  //           selectedMaterial,
  //         });
  //     }
  //   );
  // };

  clickHandlerSizes = (value) => {
    this.props.onFilterChange(value);
    this.setState({ selectedSize: value });
  };

  clickHandlerMaterials = (value) => {
    this.props.onFilterChange(value);
    this.setState({ selectedMaterial: value });
  };

  resetSelected = () => {
    this.setState({
      selectedSize: "",
    });
  };

  render() {
    const Sizes = this.state.sizes.map((size, i) => (
      <CategoryIcon
        key={size.value}
        name="size"
        idx={i}
        data={size}
        onClick={() => this.clickHandlerSizes(size.value)}
        isSelected={size.value === this.state.selectedSize}
      />
    ));

    const Materials = this.state.materials.map((material, i) => (
      <CategoryIcon
        key={material.value}
        name={`material`}
        idx={i}
        data={material}
        onClick={() => this.clickHandlerMaterials(material.value)}
        isSelected={material.value === this.state.selectedMaterial}
      />
    ));

    return (
      <div className="FilterCenter">
        {Sizes}
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
