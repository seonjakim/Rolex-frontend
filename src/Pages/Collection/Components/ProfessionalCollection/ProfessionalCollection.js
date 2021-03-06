import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import ProfessionalColList from "./ProfessionalColList";
import "./ProfessionalCollection.scss";

export default class ProfessionalCollection extends Component {
    constructor() {
        super();
        this.state = {
            collectionData: [],
        };
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        fetch("http://localhost:3000/data/ProfessionalData.json")
            .then((res) => res.json())
            .then((res) => {
                console.log(
                    "res.CollectionData가 이렇게 생겼어요 : ",
                    res.CollectionData
                );
                this.setState({ collectionData: res.CollectionData });
            });
    };

    render() {
        let CollectionList = this.state.collectionData.map((collection) => {
            return (
                <ProfessionalColList
                    pic={collection.pic_url}
                    name={collection.name}
                    detail={collection.detail}
                    link={collection.link}
                />
            );
        });
        return (
            <div className="showCollection">
                <div className="collectionTxtNSwipe">
                    <div className="collectionTxt">
                        프로페셔널 시계 - <Link>모두 보기</Link>
                    </div>
                    <div className="collectionSwipe">
                        <div className="collections">
                            <Scrollbar noDefaultStyles>{CollectionList}</Scrollbar>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
