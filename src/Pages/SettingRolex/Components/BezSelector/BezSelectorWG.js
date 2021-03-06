import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./BezSelectorWG.scss";

export default class BezSelectorWG extends Component {
  constructor() {
    super();
    this.state = {
      bezData: [],
      whichWatch: "0",
      LBtnAppear: false,
      RBtnAppear: true,
      scrollFence: "notOnFence",
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/bezDataWG.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("res.bezData가 이렇게 생겼어요 : ", res.bezData);
        this.setState({ bezData: res.bezData });
      });
  };

  componentDidUpdate = () => {
    this.changeName();
  };

  changeName = () => {
    const { bezData, whichWatch } = this.state;
    this.bezWatchPic.style.backgroundImage = `url(${bezData[whichWatch].watch_pic_url})`;
    this.bezName.innerText = bezData[whichWatch].name;
    this.bezDim.innerText = bezData[whichWatch].diameter;
    this.bezPrice.innerText = bezData[whichWatch].price;
  };

  whenScrolled = () => {
    const { scrollLeft, scrollTo, scrollWidth, clientWidth } = this.scrollbar;
    let howManyEl = Math.round(scrollLeft / 240);
    scrollTo(howManyEl * 240, 0);
    this.setState({ whichWatch: howManyEl });

    scrollLeft > 120
      ? this.setState({ LBtnAppear: true })
      : this.setState({ LBtnAppear: false });

    scrollLeft > scrollWidth - clientWidth - 120
      ? this.setState({ RBtnAppear: false })
      : this.setState({ RBtnAppear: true });
  };

  changeOpac = () => {
    const { scrollLeft, contentElement } = this.scrollbar;
    let howManyEl = Math.round(scrollLeft / 240);

    90 < scrollLeft % 240 && scrollLeft % 240 < 150
      ? this.setState({ scrollFence: "onFence" })
      : this.setState({ scrollFence: "notOnFence" });

    // if (contentElement.children[howManyEl - 1]) {
    //   contentElement.children[howManyEl - 1].style.opacity =
    //     0.88 - (scrollLeft - howManyEl * 240) / 119;
    // }

    // contentElement.children[howManyEl].style.opacity =
    //   (scrollLeft - howManyEl * 240) / 120;

    if (contentElement.children[howManyEl + 3]) {
      contentElement.children[howManyEl + 3].style.opacity =
        (scrollLeft - howManyEl * 240) / 120;
    }

    if (contentElement.children[howManyEl - 2]) {
      contentElement.children[howManyEl - 2].style.opacity =
        0.88 - (scrollLeft - howManyEl * 240) / 119;
    }
  };

  whenLClicked = () => {
    const { scrollLeft, scrollTo } = this.scrollbar;
    scrollTo(scrollLeft - 240, 0);
  };

  whenRClicked = () => {
    const { scrollLeft, scrollTo } = this.scrollbar;
    scrollTo(scrollLeft + 240, 0);
  };

  render() {
    const { bezData, scrollFence } = this.state;

    let BezList = bezData.map((bez) => {
      return (
        <div
          className="eachBez"
          style={{ backgroundImage: `url(${bez.bez_pic_url})` }}
        />
      );
    });

    return (
      <div className="bezSelectorWG">
        <div className="configureStage">
          <div>DAY-DATE 40</div>
          <div>베젤 선택하기</div>
          <div>단계 5</div>
        </div>
        <Scrollbar
          onScrollStop={this.whenScrolled}
          onScroll={this.changeOpac}
          ref={(ref) => (this.scrollbar = ref)}
          noDefaultStyles
        >
          {BezList}
        </Scrollbar>
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
        <div
          ref={(ref) => (this.bezWatchPic = ref)}
          className="watchPicContainer"
        ></div>
        <div className="nameContainer">
          <div ref={(ref) => (this.bezName = ref)} className={scrollFence} />
          <div ref={(ref) => (this.bezDim = ref)} className={scrollFence} />
          <div ref={(ref) => (this.bezPrice = ref)} className={scrollFence} />
        </div>
      </div>
    );
  }
}
