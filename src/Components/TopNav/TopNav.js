import React, { Component } from "react";
import "./TopNav.scss";

class RightMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "TopNav",
      point: [0, 0],
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = (e) => {
    const scrollPoint = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.state.point.unshift(scrollPoint);

    if (this.state.point[0] === 0) {
      this.setState({
        navClass: "TopNav",
      });
    }

    this.state.point[0] > this.state.point[1]
      ? this.setState({
          navClass: "TopNav ScrollDown",
        })
      : this.setState({
          navClass: "TopNav ScrollUp",
        });

    console.log(scrollPoint);
    console.log(this.state.point);
  };

  render() {
    return <div className={this.state.navClass}>here is Nav</div>;
  }
}

export default RightMenu;
