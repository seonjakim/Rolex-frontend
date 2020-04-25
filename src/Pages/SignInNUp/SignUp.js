import React from 'react';
import './SignUp.scss';
import ColorLogo from './ColorLogo.png'


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            UserName: "",
            UserEmail: "",
            PWInSignUp: "",
            CheckPW: "",
            signUpData: []
        }
    }

    componentDidMount = () => {
        this.GetSignUpData();
    }

    GetSignUpData = () => {
        fetch('http://localhost:3000/MockSignUpData.json')
            .then((response) => response.json())
            .then((response) => {
                console.log('name, email, pw, checkpw:', response.SignUpData);
                this.setState({ signUpData: response.SignUpData })
            })
    }

    render() {
        console.log("name, email, pw, checkpw :", this.state)
        return (
            <div className="SignUp">
                <div className="ContentWrapper">
                    <div className="Logo">
                        <img src={ColorLogo} />
                    </div>
                    <h2>회원가입</h2>
                    <div className="IdPwInput">
                        <div>이름</div>
                        <input className="UserName" onChange={this.GetUserName = (e) => { this.setState({ UserName: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>이메일</div>
                        <input className="UserEmail" onChange={this.GetUserEmail = (e) => { this.setState({ UserEmail: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>비밀번호</div>
                        <input type="password" className="PWInSignUp" onChange={this.UserPassword = (e) => { this.setState({ PWInSignUp: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>비밀번호 확인</div>
                        <input type="password" className="CheckPW" onChange={this.CheckPassword = (e) => { this.setState({ CheckPW: e.target.value }) }}></input>
                    </div>
                    <div className="AgreeJoin">
                        <button type="checkbox"></button>
                        <div>이용약관 동의</div>
                    </div>
                    <div className="WraptheBtn">
                        <button>
                            회원가입
                        </button>
                        <button className="Join">로그인</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;