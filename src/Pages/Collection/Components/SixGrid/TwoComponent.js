import React, { Component } from "react";

export default class TwoComponent extends Component {
    constructor() {
        super();
        this.state = {
            depthImageHover: false,
        };
    }
    render() {
        return (
            <a href={this.props.link}>
                <li
                    onMouseEnter={() => {
                        this.setState({ depthImageHover: true });
                    }}
                    onMouseLeave={() => {
                        this.setState({ depthImageHover: false });
                    }}
                >
                    <div
                        className={
                            this.state.depthImageHover ? "depthPicHover" : "depthPic"
                        }
                        style={{ backgroundImage: `url(${this.props.pic})` }}
                    ></div>
                    <figcaption
                        className={
                            this.state.depthImageHover ? "depthTitleHover" : "depthTitle"
                        }
                    >
                        <span>{this.props.name}</span>
                        <span>자세히 보기</span>
                    </figcaption>
                </li>
            </a>
        );
    }
}
