import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import Collection from "./Components/Collection";
import "./ShowCollection.scss";

export default class ShowCollection extends Component {
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
    fetch("http://localhost:3000/data/CollectionData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ collectionData: res.CollectionData });
      });
  };

  render() {
    let CollectionList = this.state.collectionData.map((collection) => {
      return (
        <Collection
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
            롤렉스 컬렉션 - <Link>모두 보기</Link>
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
