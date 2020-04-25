import React, { Component } from "react";
import CategoryIcon from "./Components/CategoryIcon";
import "./FilterCenter.scss";

const genders = [
  {
    title: "남성용 시계",
    img:
      "https://content.rolex.com/dam/watches/find-your-rolex/filters/man.jpg",
  },
  {
    title: "여성용 시계",
    img:
      "https://content.rolex.com/dam/watches/find-your-rolex/filters/woman.jpg",
  },
];

const materials = [
  {
    title: "오이스터스틸",
    img:
      "https://content.rolex.com/dam/watches/find-your-rolex/filters/steel.jpg",
  },
  {
    title: "골드케이스",
    img:
      "https://content.rolex.com/dam/watches/find-your-rolex/filters/gold.jpg",
  },
  {
    title: "오이스터스틸과",
    img:
      "https://content.rolex.com/dam/watches/find-your-rolex/filters/steel-and-gold.jpg",
  },
];

const jewerly = [
  {
    title: "보석 세팅 베젤",
    img:
      "https://content.rolex.com/dam/watches/find-your-rolex/filters/gem-set.jpg",
  },
];

class FilterCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: "",
      selectedMaterial: "",
      selectedJewerly: ""
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

    const Genders = genders.map((gender, i) => (
      <CategoryIcon
        key={i}
        name={`gender`}
        idx={i}
        data={gender}
        onClick={() => this.selected(this.state.selectedGender, "selectedGender", i)}
        isSelected={i === this.state.selectedGender}
      />
    ));

    const Materials = materials.map((material, i) => (
      <CategoryIcon
        key={i}
        name={`material`}
        idx={i}
        data={material}
        onClick={() => this.selected(this.state.selectedMaterial, "selectedMaterial", i)}
        isSelected={i === this.state.selectedMaterial}
      />
    ));

    const jewerlies = jewerly.map((jewerly, i) => (
      <CategoryIcon
        key={i}
        name={`jewerly`}
        idx={i}
        data={jewerly}
        onClick={() => this.selected(this.state.selectedJewerly, "selectedJewerly", i)}
        isSelected={i === this.state.selectedJewerly}
      />
    ));
    return (
      <div className="FilterCenter">
        {Genders}
        <div className="Dot"></div>
        {Materials}
        {jewerlies}
        <div className="CategoryItem FilterContainer">
            <div className="FilterBox"/>
            <span>모든 필터</span>
          </div>
      </div>
    );
  }
}

// {genders.map((gender) => (
//   <CategoryIcon
//     key={gender.name}
//     data={gender}
//     onClick={() => { this.setState({selectedGender: gender.name}) }}
//     isSelected={gender.name === this.state.selectedGender}

//   />
// ))}
// 쩜
// {materials.map((mat, i) => (
//   <CategoryIcon key={i} data={mat}/>
// ))}
// 쩜
// {materials.map((mat, i) => (
//   <CategoryIcon key={i} data={mat}/>
// ))}

//   }

// }

export default FilterCenter;
