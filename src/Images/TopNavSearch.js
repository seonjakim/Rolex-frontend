import React, { Component } from "react";

export default class TopNavSearch extends Component {
  render() {
    return (
      <svg
        aria-labelledby="search-title"
        height="15"
        width="15"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        className="iconSearch"
        name="iconSearch"
      >
        <path d="m15 13.6-4.1-4.1c.7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.3 0 2.5-.4 3.5-1.1l4.1 4.1zm-9-3.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
      </svg>
    );
  }
}
