import React from "react";
import { withRouter, Link } from "react-router-dom";
import ColorLogo from "./ColorLogo.png";
import "./SignIn.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      PersonalData: [],
    };
  }

  signIn = () => {
    const { name, password } = this.state;
    fetch(`http://3.134.244.199:8000/user/login`, {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("token", res.access_token);
          this.props.history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="SignIn">
        <div className="ContentWrapper">
          <div className="Logo">
            <img src={ColorLogo} alt="color logo" />
          </div>
          <h2>로그인</h2>
          <div className="IdPwInput">
            <div>이름</div>
            <input
              className="EmailAddress"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>
          <div className="IdPwInput">
            <div>비밀번호</div>
            <input
              className="PW"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              type="password"
            ></input>
          </div>
          <div className="WraptheBtn">
            <button onClick={this.signIn}>로그인</button>
            <button className="Join">
              <Link to="/signup">회원가입</Link>
            </button>
          </div>
          <div className="FindIdPw">아이디 / 비밀번호 찾기</div>
        </div>
      </div>
    );
  }
}
export default withRouter(SignIn);
