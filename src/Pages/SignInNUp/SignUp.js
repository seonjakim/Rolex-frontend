import React from 'react';
import { withRouter } from 'react-router-dom';
import ColorLogo from './ColorLogo.png'
import './SignUp.scss';

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

    clickToSignUp = (e) => {
        e.preventDefault();
        const { user_id, password } = this.state;
        console.log('ok');
        if (!user_id || !password) {
            alert("필수항목을 작성해주세요")
        } else {
            fetch("http://10.58.0.209:8000/user/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.state.user_id,
                    password: this.state.password
                })
                    .then(res => {
                        if (res.status === 400) {
                            alert('다시 한번 확인해주세요.')
                        } else {
                            alert('가입완료');
                        }
                    })
            })
        }
    }


    render() {
        console.log("name, email, pw, checkpw :", this.state)
        return (
            <div className="SignUp">
                <div className="ContentWrapper">
                    <div className="Logo">
                        <img src={ColorLogo} alt="color logo" />
                    </div>
                    <h2>회원가입</h2>
                    <div className="IdPwInput">
                        <div>이름</div>
                        <input className="UserName" onChange={(e) => { this.setState({ UserName: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>이메일</div>
                        <input className="UserEmail" onChange={(e) => { this.setState({ UserEmail: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>비밀번호</div>
                        <input type="password" className="PWInSignUp" onChange={(e) => { this.setState({ PWInSignUp: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>비밀번호 확인</div>
                        <input type="password" className="CheckPW" onChange={(e) => { this.setState({ CheckPW: e.target.value }) }}></input>
                    </div>
                    <div className="AgreeJoin">
                        <button type="checkbox"></button>
                        <div>이용약관 동의</div>
                    </div>
                    <div className="WraptheBtn">
                        <button onClick={this.clickToSignUp}>
                            회원가입
                        </button>
                        <button className="Join">로그인</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp);