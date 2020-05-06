import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./DialSelector.scss";

export default class DialSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialData: [],
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
    if (this.props.data.model === 40) {
      queryString = `40&material=${this.props.data.mat}&bezel=${this.props.data.bez}&bracelet=프레지던트`;
    } else if (this.props.data.model === 36) {
      queryString = `36&material=${this.props.data.mat}&bezel=${this.props.data.bez}&bracelet=${this.props.data.brac}`;
    }
    fetch(`http://10.58.4.196:8000/product/config/dial?size=${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res.dialData가 이렇게 생겼어요 : ", res.dial_data);
        this.setState({ dialData: res.dial_data }, () => {
          this.opacWhenMount();
        });
      });
  };

  opacWhenMount = () => {
    const { contentElement } = this.scrollbar;
    contentElement.children[3].style.opacity = 0;
  };

  componentDidUpdate = () => {
    this.changeName();
  };

  changeName = () => {
    const { dialData, whichWatch } = this.state;
    this.dialWatchPic.style.backgroundImage = `url(${dialData[whichWatch].watch_image})`;
    this.dialName.innerText = dialData[whichWatch].name;
    this.dialDim.innerText = `${dialData[whichWatch].is_oyster}, ${dialData[whichWatch].diameter} mm`;
    if (dialData[whichWatch].price === 0) {
      this.dialPrice.innerText = "가격 문의";
    } else {
      this.dialPrice.innerText = dialData[whichWatch].price;
    }
  };

  whenScrolled = () => {
    const { dialData, whichWatch } = this.state;
    const { scrollLeft, scrollTo, scrollWidth, clientWidth } = this.scrollbar;
    let howManyEl = Math.round(scrollLeft / 240);
    scrollTo(howManyEl * 240, 0);
    this.setState({ whichWatch: howManyEl });

    this.props.onSelect(dialData[whichWatch].product_id);

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
    const { dialData, scrollFence } = this.state;

    let DialList = dialData.map((dial) => {
      return (
        <div
          className="eachDial"
          style={{ backgroundImage: `url(${dial.dial_url})` }}
        />
      );
    });

    return (
      <div className="dialSelector">
        <div className="configureStage">
          <div>DAY-DATE 40</div>
          <div>다이얼 선택하기</div>
          <div>단계 6</div>
        </div>
        <Scrollbar
          onScrollStop={this.whenScrolled}
          onScroll={this.changeOpac}
          ref={(ref) => (this.scrollbar = ref)}
          noDefaultStyles
        >
          {DialList}
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
          ref={(ref) => (this.dialWatchPic = ref)}
          className="watchPicContainer"
        ></div>
        <div className="nameContainer">
          <div ref={(ref) => (this.dialName = ref)} className={scrollFence} />
          <div ref={(ref) => (this.dialDim = ref)} className={scrollFence} />
          <div ref={(ref) => (this.dialPrice = ref)} className={scrollFence} />
        </div>
      </div>
    );
  }
}
