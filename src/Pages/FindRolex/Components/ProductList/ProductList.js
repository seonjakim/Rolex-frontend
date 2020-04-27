import React, { Component } from "react";
import GridChange from "./Components/GridChange";
import ProductCard from "./Components/ProductCard";
import DescriptionCard from "./Components/DescriptionCard";
import "./ProductList.scss";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
      watches: [],
      descriptions: [],
      watches02: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          watches: res.watches,
          descriptions: res.descriptions,
        });
      });
  };

  toggleChange = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };

  render() {
    const Products = this.state.watches.map((watch, idx) => (
      <ProductCard key={idx} idx={idx} class={`item` + idx} data={watch} />
    ));

    const Descriptions = this.state.descriptions.map((des, idx) => (
      <DescriptionCard key={idx} idx={idx} class={`des` + idx} data={des} />
    ));

    return (
      <div className="ProductList">
        <GridChange toggle={this.toggleChange} checkbox={this.state.checkbox} />
        <div
          className={
            this.state.checkbox === false
              ? "ListGrid Grid01"
              : "ListGrid Grid02"
          }
        >
          {Products}
          {Descriptions}
        </div>
      </div>
    );
  }
}

export default ProductList;
