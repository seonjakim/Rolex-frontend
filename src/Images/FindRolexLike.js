import React, { Component } from "react";

export default class FindRolexLike extends Component {
  handleLike = (id) => {
    localStorage.getItem("token")
      ? fetch("http://10.58.5.93:8000/user/like", {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            product_id: id,
          }),
        })
      : alert("로그인 바랍니다");
  };

  render() {
    console.log(localStorage.getItem("token") ? "true" : "false");
    return (
      <svg
        aria-labelledby=""
        height="15"
        width="15"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        className="like"
        onClick={() => this.handleLike(this.props.id)}
      >
        <path d="m14.98 5.65c-.24 2.59-3.18 6.01-7.48 8.6-4.3-2.59-7.24-6.01-7.48-8.6s1.73-4.9 4.16-4.9 3.32 1.76 3.32 1.76.88-1.76 3.32-1.76 4.4 2.31 4.16 4.9z"></path>
      </svg>
    );
  }
}
