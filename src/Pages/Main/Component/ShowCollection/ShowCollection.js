import React, { Component } from "react";
import { Link } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import EachCollection from "./Components/EachCollection";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./ShowCollection.scss";

export default class ShowCollection extends Component {
  constructor() {
    super();
    this.state = {
      collectionData: [],
      LBtnAppear: false,
      RBtnAppear: true,
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/CollectionData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(
          "res.CollectionData가 이렇게 생겼어요 : ",
          res.CollectionData
        );
        this.setState({ collectionData: res.CollectionData });
      });
  };

  whenScrolled = () => {
    if (this.scrollbar.scrollLeft > 200) {
      this.setState({ LBtnAppear: true });
    } else {
      this.setState({ LBtnAppear: false });
    }
    if (
      this.scrollbar.scrollLeft >
      this.scrollbar.scrollWidth - this.scrollbar.clientWidth - 200
    ) {
      this.setState({ RBtnAppear: false });
    } else {
      this.setState({ RBtnAppear: true });
    }
  };

  whenLClicked = () => {
    let firstElMargin = this.scrollbar.clientWidth * 0.05;
    let firstElWidth = 377 + firstElMargin;
    let howManyEl = parseInt((this.scrollbar.scrollLeft - firstElWidth) / 399);
    let howMuchInEl =
      (this.scrollbar.scrollLeft - firstElWidth - howManyEl * 399 - 22) % 377;
    if (howMuchInEl > 200) {
      this.scrollbar.scrollTo(
        this.scrollbar.scrollLeft - (howMuchInEl + firstElMargin),
        0
      );
    } else {
      this.scrollbar.scrollTo(
        this.scrollbar.scrollLeft - (howMuchInEl + 399 + firstElMargin),
        0
      );
    }
  };

  whenRClicked = () => {
    let firstElMargin = this.scrollbar.clientWidth * 0.05;
    let firstElWidth = 377 + firstElMargin;
    let howManyEl = parseInt((this.scrollbar.scrollLeft - firstElWidth) / 399);
    let howMuchInEl =
      (this.scrollbar.scrollLeft - firstElWidth - howManyEl * 399 - 22) % 377;
    if (howMuchInEl > 200) {
      this.scrollbar.scrollTo(
        this.scrollbar.scrollLeft + (399 - howMuchInEl) - firstElMargin + 399,
        0
      );
    } else {
      this.scrollbar.scrollTo(
        this.scrollbar.scrollLeft + (399 - howMuchInEl) - firstElMargin,
        0
      );
    }
  };

  render() {
    let CollectionList = this.state.collectionData.map((collection) => {
      return (
        <EachCollection
          idx={collection.id}
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
            롤렉스 컬렉션 ㅡ <Link>모두 보기</Link>
          </div>
          <div className="collectionSwipe" onScroll={this.whenScrolled}>
            <div className="collections">
              <Scrollbar
                ref={(ref) => (this.scrollbar = ref)}
                trackClickBehavior="step"
                noDefaultStyles
              >
                {CollectionList}
              </Scrollbar>
            </div>
          </div>
          <button
            className={`${this.state.LBtnAppear}`}
            onMouseDown={this.whenLClicked}
          >
            <ScrollLeft />
          </button>
          <button
            className={`${this.state.RBtnAppear}`}
            onMouseDown={this.whenRClicked}
          >
            <ScrollRight />
          </button>
        </div>
      </div>
    );
  }
}
