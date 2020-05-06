import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./WatchSelector.scss";

export default class WatchSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchData: [],
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
    fetch("http://localhost:3000/data/watchData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("res.watchData가 이렇게 생겼어요 : ", res.watchData);
        this.setState({ watchData: res.watchData }, () => {
          this.opacWhenMount();
        });
      });
  };

  opacWhenMount = () => {
    const { contentElement } = this.scrollbar;
    contentElement.children[3].style.opacity = 0;
  };

  componentDidUpdate = (prevState) => {
    if (prevState.whichWatch !== this.state.whichWatch) {
      this.changeName();
    }
  };

  changeName = () => {
    const { watchData, whichWatch } = this.state;
    watchData[whichWatch] &&
      (this.watchName.innerText = watchData[whichWatch].name);
  };

  whenScrolled = () => {
    const { watchData, whichWatch } = this.state;

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

    this.props.onSelect(watchData[whichWatch].name);

    if (whichWatch === 0 || whichWatch === 2) {
      this.props.changeBg(
        "https://content.rolex.com/dam/2019/bg/model-cover-background-yellow-gold.jpg?imwidth=1920"
      );
    } else if (whichWatch === 1 || whichWatch === 3 || whichWatch === 6) {
      this.props.changeBg(
        "https://content.rolex.com/dam/2019/bg/model-cover-background-everose.jpg?imwidth=2880"
      );
    } else {
      this.props.changeBg(
        "https://content.rolex.com/dam/2019/bg/model-cover-background-steel.jpg?imwidth=1920"
      );
    }
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
    let WatchList = this.state.watchData.map((watch) => {
      return (
        <div
          className="eachWatch"
          style={{ backgroundImage: `url(${watch.pic_url})` }}
        />
      );
    });

    return (
      <div className="watchSelector">
        <div className="configureStage">
          <div>클래식 시계</div>
          <div>컬렉션 선택하기</div>
          <div>단계 2</div>
        </div>
        <Scrollbar
          onScrollStop={this.whenScrolled}
          onScroll={this.changeOpac}
          ref={(ref) => (this.scrollbar = ref)}
          noDefaultStyles
        >
          {WatchList}
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
        <div className="nameContainer">
          <div
            ref={(ref) => (this.watchName = ref)}
            className={this.state.scrollFence}
          />
        </div>
      </div>
    );
  }
}
