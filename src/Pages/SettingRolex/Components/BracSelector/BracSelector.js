import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./BracSelector.scss";

export default class BracSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bracData: [],
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
    fetch("http://localhost:3000/data/bracData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("res.bracData가 이렇게 생겼어요 : ", res.bracData);
        this.setState({ bracData: res.bracData });
      });
  };

  componentDidUpdate = () => {
    this.changeName();
  };

  changeName = () => {
    const { bracData, whichWatch } = this.state;
    this.bracWatchPic.style.backgroundImage = `url(${bracData[whichWatch].watch_pic_url})`;
    this.bracName.innerText = bracData[whichWatch].name;
    this.bracDim.innerText = bracData[whichWatch].diameter;
    this.bracPrice.innerText = bracData[whichWatch].price;
  };

  whenScrolled = () => {
    const { bracData, whichWatch } = this.state;

    const { scrollLeft, scrollTo, scrollWidth, clientWidth } = this.scrollbar;
    let howManyEl = Math.round(scrollLeft / 240);
    scrollTo(howManyEl * 240, 0);
    this.setState({ whichWatch: howManyEl });

    this.props.onSelect(bracData[whichWatch].name);

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
    const { bracData, scrollFence } = this.state;

    let BracList = bracData.map((brac) => {
      return (
        <div
          className="eachBrac"
          style={{ backgroundImage: `url(${brac.brac_pic_url})` }}
        />
      );
    });

    return (
      <div className="bracSelector">
        <div className="configureStage">
          <div>DAY-DATE 40</div>
          <div>브레슬릿 선택하기</div>
          <div>단계 6</div>
        </div>
        <Scrollbar
          onScrollStop={this.whenScrolled}
          onScroll={this.changeOpac}
          ref={(ref) => (this.scrollbar = ref)}
          noDefaultStyles
        >
          {BracList}
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
          ref={(ref) => (this.bracWatchPic = ref)}
          className="watchPicContainer"
        ></div>
        <div className="nameContainer">
          <div ref={(ref) => (this.bracName = ref)} className={scrollFence} />
          <div ref={(ref) => (this.bracDim = ref)} className={scrollFence} />
          <div ref={(ref) => (this.bracPrice = ref)} className={scrollFence} />
        </div>
      </div>
    );
  }
}
