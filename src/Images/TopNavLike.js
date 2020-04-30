import React, { Component } from "react";

export default class TopNavLike extends Component {
  render() {
    return (
      <svg
        aria-labelledby="your-selection-title"
        height="15"
        width="15"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        className="iconLike"
      >
        <path d="m13.62 2.05c-.9-1.01-2.18-1.59-3.5-1.59-1.09 0-1.96.32-2.62.75-.66-.43-1.53-.75-2.62-.75-1.31 0-2.6.58-3.52 1.59-.99 1.08-1.47 2.54-1.34 4 .24 2.6 2.79 5.67 6.66 8l.81.49.81-.49c3.87-2.33 6.42-5.39 6.66-8 .14-1.46-.35-2.92-1.34-4zm-.69 3.99c-.17 1.88-2.31 4.36-5.44 6.25-3.12-1.88-5.27-4.36-5.44-6.25-.18-1.89 1.26-3.57 3.02-3.57s2.43 1.28 2.43 1.28.64-1.28 2.41-1.28 3.2 1.68 3.02 3.57z"></path>
      </svg>
    );
  }
}
