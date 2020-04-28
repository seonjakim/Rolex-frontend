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
    const { scrollLeft, scrollWidth, clientWidth } = this.scrollbar;
    scrollLeft > 200
      ? this.setState({ LBtnAppear: true })
      : this.setState({ LBtnAppear: false });

    scrollLeft > scrollWidth - clientWidth - 200
      ? this.setState({ RBtnAppear: false })
      : this.setState({ RBtnAppear: true });
  };

  whenLClicked = () => {
    const { scrollLeft, clientWidth, scrollTo } = this.scrollbar;
    let firstElMargin = clientWidth * 0.05;
    let firstElWidth = 377 + firstElMargin;
    let howManyEl = parseInt((scrollLeft - firstElWidth) / 399);
    let howMuchInEl = (scrollLeft - firstElWidth - howManyEl * 399 - 22) % 377;
    scrollTo(
      scrollLeft -
        (howMuchInEl + firstElMargin + (howMuchInEl > 200 ? 0 : 399)),
      0
    );
  };

  whenRClicked = () => {
    const { scrollLeft, clientWidth, scrollTo } = this.scrollbar;
    let firstElMargin = clientWidth * 0.05;
    let firstElWidth = 377 + firstElMargin;
    let howManyEl = parseInt((scrollLeft - firstElWidth) / 399);
    let howMuchInEl = (scrollLeft - firstElWidth - howManyEl * 399 - 22) % 377;
    scrollTo(
      scrollLeft +
        (399 - howMuchInEl) -
        firstElMargin +
        (howMuchInEl > 200 ? 399 : 0),
      0
    );
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
