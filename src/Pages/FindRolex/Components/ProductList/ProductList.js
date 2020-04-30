import React, { Component } from "react";
import GridChange from "./Components/GridChange";
import ProductCard from "./Components/ProductCard";
import DescriptionCard from "./Components/DescriptionCard";
import { BASE_URL } from "../../../../Config";
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

  // componentDidMount() {
  //   fetch(`${BASE_URL}/product/list`)
  //     .then((data) => data.json())
  //     .then((data) => console.log(data.products));
  // }

  componentDidMount() {
    fetch(`${BASE_URL}/product/list?page=1&limit=14`)
      .then((data) => data.json())
      .then((data) => this.setState({ watches02: data }));
    this.getData();
  }

  // componentDidMount = () => {
  //   this.getData();
  // };

  getData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        const { descriptions } = res;
        this.setState({
          descriptions,
        });
      });
  };

  toggleChange = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };

  render() {
    console.log(`here is render`, this.state.watches02.products);

    const Descriptions = this.state.descriptions.map((des, idx) => (
      <DescriptionCard key={idx} idx={idx} class={`des${idx}`} data={des} />
    ));

    return (
      <div className="ProductList">
        <GridChange toggle={this.toggleChange} checkbox={this.state.checkbox} />
        <div
          className={
            this.state.checkbox ? "ListGrid Grid02" : "ListGrid Grid01"
          }
        >
          {this.state.watches02.products &&
            this.state.watches02.products.map((watch, idx) => (
              <ProductCard
                key={idx}
                idx={idx}
                class={`item${idx}`}
                name={watch.collection}
                material={watch.material}
                img={watch.image}
                size={watch.size}
                oyster={watch.oyster ? "오이스터" : ""}
              />
            ))}
          {Descriptions}
        </div>
      </div>
    );
  }
}

export default ProductList;
