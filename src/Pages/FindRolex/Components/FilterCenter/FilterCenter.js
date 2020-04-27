import React, { Component } from "react";
import CategoryIcon from "./Components/CategoryIcon";
import "./FilterCenter.scss";

// const genders = [
//   {
//     title: "36mm",
//     img:"https://content.rolex.com/dam/watches/find-your-rolex/filters/diameter-36.jpg",
//   },
//   {
//     title: "40mm",
//     img:"https://content.rolex.com/dam/watches/find-your-rolex/filters/diameter-40.jpg",
//   },
// ];

// const materials = [
//   {
//     title: "옐로우 골드",
//     img:"https://content.rolex.com/dam/watches/find-your-rolex/filters/alt-18-ct-yellow-gold.jpg"
//   },
//   {
//     title: "핑크 골드",
//     img:"https://content.rolex.com/dam/watches/find-your-rolex/filters/alt-18-ct-pink-gold.jpg"
//   },
//   {
//     title: "화이트 골드",
//     img:"https://content.rolex.com/dam/watches/find-your-rolex/filters/alt-18-ct-white-gold.jpg"
//   },
//   {
//     title: "플래티넘",
//     img:"https://content.rolex.com/dam/watches/find-your-rolex/filters/alt-platinum.jpg"
//   }
// ];


class FilterCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders : [],
      materials : [],
      selectedGender : "",
      selectedMaterial : "",
      selectedJewerly : ""
    };
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          genders: res.genders,
          materials: res.materials
        })
      })
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
    console.log(this.state.genders)
    const Genders = this.state.genders.map((gender, i) => (
      <CategoryIcon
        key={i}
        name={`gender`}
        idx={i}
        data={gender}
        onClick={() => this.selected(this.state.selectedGender, "selectedGender", i)}
        isSelected={i === this.state.selectedGender}
      />
    ));

    const Materials = this.state.materials.map((material, i) => (
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
