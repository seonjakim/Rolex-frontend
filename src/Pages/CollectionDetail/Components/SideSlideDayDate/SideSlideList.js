import React, { Component } from "react";

export default class SideSlideList extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
        };
    }
    render() {
        return (
            <a href={this.props.link}>
                <li
                    onMouseEnter={() => {
                        this.setState({ hover: true });
                    }}
                    onMouseLeave={() => {
                        this.setState({ hover: false });
                    }}
                >
                    <div
                        className={
                            this.state.hover ? "collectionPicHover" : "collectionPic"
                        }
                        style={{ backgroundImage: `url(${this.props.pic})` }}
                    >
                        `품격을
                        담은
                        시계`
                    </div>
                    <div
                        className={
                            this.state.hover ? "collectionTitleHover" : "collectionTitle"
                        }
                    >
                    </div>
                </li>
                <li
                    onMouseEnter={() => {
                        this.setState({ hover: true });
                    }}
                    onMouseLeave={() => {
                        this.setState({ hover: false });
                    }}
                >
                    <div
                        className={
                            this.state.hover ? "collectionPicHover" : "collectionPic"
                        }
                        style={{ backgroundImage: `url(${this.props.pic})` }}
                    ></div>
                    <div
                        className={
                            this.state.hover ? "collectionTitleHover" : "collectionTitle"
                        }
                    >
                    </div>
                </li>

            </a>
        );
    }
}
