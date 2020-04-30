import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Collection.scss";

class Collection extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <video></video>
          </div>
          <div></div>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <div>
            <div></div>
            <div>collection component</div>
          </div>
          <div>
            <div></div>
            <div>collection component</div>
          </div>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>PageShare Component</div>
        <div>FOOTER</div>
      </div>
    );
  }
}

export default withRouter(Collection);
