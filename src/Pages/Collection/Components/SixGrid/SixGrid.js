import React, { Component } from "react";
import TwoComponent from "./TwoComponent";
import "./SixGrid.scss";

export default class SixGrid extends Component {
    constructor() {
        super();
        this.state = {
            indepthDataTop: []
        };
    }

    componentDidMount = () => {
        this.getDataTop();
    };

    getDataTop = () => {
        fetch("http://localhost:3000/data/SixGrid.json")
            .then((res) => res.json())
            .then((res) => {
                console.log(
                    "res.IndepthDataTop이 이렇게 생겼어요 : ",
                    res.IndepthDataTop
                );
                this.setState({ indepthDataTop: res.IndepthDataTop });
            });
    };

    render() {
        let IndepthList1 = this.state.indepthDataTop.map((indepthtopdatum) => {
            return (
                <TwoComponent
                    pic={indepthtopdatum.pic_url}
                    name={indepthtopdatum.name}
                    link={indepthtopdatum.link}
                />
            );
        });

        return (
            <div className="SixGrid">
                <div className="depthTxtImg">
                    {/* <div className="depthTxt">시계 골라보기</div> */}
                    <div className="depthImg">
                        <ul>{IndepthList1}</ul>
                    </div>
                </div>
            </div>
        );
    }
}
