import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./BezSelector.scss";

export default class BezSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bezData: [],
      whichWatch: 0,
      LBtnAppear: false,
      RBtnAppear: true,
      scrollFence: "notOnFence",
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    let queryString;
    queryString = `${this.props.onSelect.model}&material=${this.props.onSelect.mat}`;
    fetch(`http://10.58.4.196:8000/product/config/bezel?size=${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res.bezData가 이렇게 생겼어요 : ", res.bezel_data);
        this.setState({ bezData: res.bezel_data });
      });
  };

  componentDidUpdate = () => {
    this.changeName();
  };

  changeName = () => {
    const { bezData, whichWatch } = this.state;
    this.bezWatchPic.style.backgroundImage = `url(${bezData[whichWatch].watch_image})`;
    this.bezName.innerText = bezData[whichWatch].name;
    this.bezDim.innerText = bezData[whichWatch].diameter;
    if (bezData[whichWatch].price === 0) {
      this.bezPrice.innerText = "가격 문의";
    } else {
      this.bezPrice.innerText = bezData[whichWatch].price;
    }
  };

  whenScrolled = () => {
    const { bezData, whichWatch } = this.state;
    const { scrollLeft, scrollTo, scrollWidth, clientWidth } = this.scrollbar;
    let howManyEl = Math.round(scrollLeft / 240);
    scrollTo(howManyEl * 240, 0);
    this.setState({ whichWatch: howManyEl });

    this.props.onSelect(bezData[whichWatch].name);

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
          style={{ backgroundImage: `url(${bez.bezel_url})` }}
        />
      );
    });

    return (
      <div className="bezSelector">
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
