import React from "react";
import "./DisplayWithHeart.scss";
import ProductCard from '../../FindRolex/Components/ProductList/Components/ProductCard'


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
    }
];


const Products = watches.map((watch, idx) => (
    <ProductCard
        key={idx}
        idx={idx}
        className={`item` + idx}
        data={watch}
    />
))


export default class DisplayWithHeart extends React.Component {
    render() {
        return (
            <div className="DisplayWithHeart">
                <div className="DivForMargin">
                    <ul>
                        <li>
                            <a>
                                <figure>
                                    <picture>
                                        <div className="ListGrid">
                                            {Products}
                                        </div>
                                    </picture>
                                </figure>
                            </a>
                        </li>
                    </ul>
                    <div className="divBtn">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}