import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import ScrollLeft from "../../../../Images/ScrollLeft";
import ScrollRight from "../../../../Images/ScrollRight";
import "./ModelSelector.scss";

export default class ModelSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelData: [],
      whichWatch: "0",
      LBtnAppear: false,
      RBtnAppear: true,
      boldScrollFence: "boldNotOnFence",
      scrollFence: "notOnFence",
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/modelData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("res.modelData가 이렇게 생겼어요 : ", res.modelData);
        this.setState({ modelData: res.modelData });
      });
  };

  componentDidUpdate = () => {
    this.changeName();
  };

  changeName = () => {
    const { modelData, whichWatch } = this.state;
    if (whichWatch === 0) {
      this.modelName.innerText = modelData[1].name;
      this.modelDim.innerText = modelData[1].diameter;
    } else {
      this.modelName.innerText = modelData[0].name;
      this.modelDim.innerText = modelData[0].diameter;
    }
  };

  whenScrolled = () => {
    const { modelData, whichWatch } = this.state;
    const { scrollLeft, scrollTo, scrollWidth, clientWidth } = this.scrollbar;
    let howManyEl = Math.round(scrollLeft / 240);
    scrollTo(howManyEl * 240, 0);
    this.setState({ whichWatch: howManyEl });

    if (whichWatch === 0) {
      this.props.onSelect(modelData[1].diameter);
    } else {
      this.props.onSelect(modelData[0].diameter);
    }

    scrollLeft > 120
      ? this.setState({ LBtnAppear: true })
      : this.setState({ LBtnAppear: false });

    scrollLeft > scrollWidth - clientWidth - 120
      ? this.setState({ RBtnAppear: false })
      : this.setState({ RBtnAppear: true });
  };

  changeOpac = () => {
    const { scrollLeft } = this.scrollbar;

    90 < scrollLeft % 240 && scrollLeft % 240 < 150
      ? this.setState({
          scrollFence: "onFence",
          boldScrollFence: "boldOnFence",
        })
      : this.setState({
          scrollFence: "notOnFence",
          boldScrollFence: "boldNotOnFence",
        });
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
    let ModelList = this.state.modelData.map((model) => {
      return (
        <div
          className="eachModel"
          style={{ backgroundImage: `url(${model.pic_url})` }}
        />
      );
    });

    return (
      <div className="modelSelector">
        <div className="configureStage">
          <div>DAY-DATE</div>
          <div>모델 선택하기</div>
          <div>단계 3</div>
        </div>
        <Scrollbar
          onScrollStop={this.whenScrolled}
          onScroll={this.changeOpac}
          ref={(ref) => (this.scrollbar = ref)}
          rtl="false"
          noDefaultStyles
        >
          {ModelList}
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
            ref={(ref) => (this.modelName = ref)}
            className={this.state.boldScrollFence}
          />
          <div
            ref={(ref) => (this.modelDim = ref)}
            className={this.state.scrollFence}
          />
        </div>
      </div>
    );
  }
}
