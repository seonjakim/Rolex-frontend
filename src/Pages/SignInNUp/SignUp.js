import React from "react";
import { withRouter } from "react-router-dom";
import ColorLogo from "./ColorLogo.png";
import { API_URL } from "../../Config";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      checkpassword: "",
      signUpData: [],
    };
  }

  clickToSignUp = (e) => {
    e.preventDefault();
    const { name, password, checkPassword } = this.state;
    if (!name || !password || !checkPassword) {
      alert("모든 항목을 작성해주세요.");
    } else if (password !== checkPassword) {
      alert("비밀번호를 다시 한번 확인해주세요.");
    } else {
      fetch(`http://10.58.5.93:8000/user/sign-up`, {
        method: "POST",
        body: JSON.stringify({
          name,
          password,
        }),
      }).then((res) => {
        if (res.status === 401) {
          alert("다시 한 번 확인해주세요.");
        } else {
          alert("가입 완료");
          this.props.history.push("/signin");
        }
      });
    }
  };

  render() {
    return (
      <div className="SignUp">
        <div className="ContentWrapper">
          <div className="Logo">
            <img src={ColorLogo} alt="color logo" />
          </div>
          <h2>회원가입</h2>
          <div className="IdPwInput">
            <div>이름</div>
            <input
              className="UserName"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>
          <div className="IdPwInput">
            <div>비밀번호</div>
            <input
              type="password"
              className="PWInSignUp"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            ></input>
          </div>
          <div className="IdPwInput">
            <div>비밀번호 확인</div>
            <input
              type="password"
              className="CheckPW"
              onChange={(e) => {
                this.setState({ checkPassword: e.target.value });
              }}
            ></input>
          </div>
          <div className="AgreeJoin">
            <button type="checkbox"></button>
            <div>이용약관 동의</div>
          </div>
          <div className="WraptheBtn">
            <button onClick={this.clickToSignUp}>회원가입</button>
            <button className="Join">로그인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
