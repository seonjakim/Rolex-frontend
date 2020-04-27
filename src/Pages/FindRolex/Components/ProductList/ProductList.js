import React, { Component } from "react";
import GridChange from "./Components/GridChange";
import ProductCard from "./Components/ProductCard"
import "./ProductList.scss";

const watches = [
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
    {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  },
  {
    name: "Day-Date 40",
    outline: "오이스터, 40mm, 옐로우 골드",
    img:
      "https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=420, https://content.rolex.com/dam/2019/upright-bba-with-shadow/m228238-0042.png?impolicy=v6-upright&imwidth=840 2x",
  }
];


const Products = watches.map((watch,idx) => (
  <ProductCard
    key={idx}
    idx={idx}
    className={`item`+idx}
    data={watch}
  />
))

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <GridChange />
        <div className="ListGrid">
          {Products}
        </div>
      </div>
    );
  }
}

export default ProductList;
