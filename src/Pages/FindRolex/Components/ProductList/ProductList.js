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
      descriptions: [],
    };
  }

  // componentDidMount() {
  //   fetch(`${BASE_URL}/product/list`)
  //     .then((data) => data.json())
  //     .then((data) => console.log(data.products));
  // }

  // componentDidMount() {
  //   fetch(`${BASE_URL}/product/list?page=1&limit=14`)
  //     .then((data) => data.json())
  //     .then((data) => this.setState({ watches02: data }));
  //   this.getData();
  // }

  componentDidMount = () => {
    this.getData();
  };

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
          {this.props.watches.products &&
            this.props.watches.products.map((watch, idx) => (
              <ProductCard
                key={idx}
                idx={idx}
                class={`item${idx}`}
                name={watch.collection}
                material={watch.material}
                img={watch.image}
                diameter={watch.diameter}
                oyster={watch.oyster ? "오이스터" : ""}
                id={watch.id}
              />
            ))}
          {Descriptions}
        </div>
      </div>
    );
  }
}

export default ProductList;
