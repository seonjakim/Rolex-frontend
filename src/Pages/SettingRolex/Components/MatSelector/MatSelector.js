import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./MatSelector.scss";

export default class MatSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matData: [],
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
    queryString = `${this.props.data.model}`;
    fetch(`http://10.58.4.196:8000/product/config/material?size=${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res.matData가 이렇게 생겼어요 : ", res.material_data);
        this.setState({ matData: res.material_data }, () => {
          this.opacWhenMount();
        });
      });
  };

  opacWhenMount = () => {
    const { contentElement } = this.scrollbar;
    if (contentElement.children[3]) {
      contentElement.children[3].style.opacity = 0;
    }
  };

  componentDidUpdate = () => {
    this.changeName();
  };

  changeName = () => {
    const { matData, whichWatch } = this.state;
    this.matWatchPic.style.backgroundImage = `url(${matData[whichWatch].watch_image})`;
    this.matName.innerText = matData[whichWatch].material_name;
    this.matDim.innerText = matData[whichWatch].diameter;
    if (matData[whichWatch].price === 0) {
      this.matPrice.innerText = "가격 문의";
    } else {
      this.matPrice.innerText = matData[whichWatch].price;
    }
  };

  whenScrolled = () => {
    const { matData, whichWatch } = this.state;

    const { scrollLeft, scrollTo, scrollWidth, clientWidth } = this.scrollbar;
    let howManyEl = Math.round(scrollLeft / 240);
    scrollTo(howManyEl * 240, 0);
    this.setState({ whichWatch: howManyEl });

    this.props.onSelect(matData[whichWatch].material_name);

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
    const { matData, scrollFence } = this.state;

    let MatList = matData.map((mat) => {
      return (
        <div
          className="eachMat"
          style={{ backgroundImage: `url(${mat.material_url})` }}
        />
      );
    });

    return (
      <div className="matSelector">
        <div className="configureStage">
          <div>DAY-DATE 40</div>
          <div>소재 선택하기</div>
          <div>단계 4</div>
        </div>
        <Scrollbar
          onScrollStop={this.whenScrolled}
          onScroll={this.changeOpac}
          ref={(ref) => (this.scrollbar = ref)}
          noDefaultStyles
        >
          {MatList}
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
          ref={(ref) => (this.matWatchPic = ref)}
          className="watchPicContainer"
        ></div>
        <div className="nameContainer">
          <div ref={(ref) => (this.matName = ref)} className={scrollFence} />
          <div ref={(ref) => (this.matDim = ref)} className={scrollFence} />
          <div ref={(ref) => (this.matPrice = ref)} className={scrollFence} />
        </div>
      </div>
    );
  }
}
