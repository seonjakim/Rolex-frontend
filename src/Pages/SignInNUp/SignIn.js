import React from 'react';
import './SignIn.scss';
import ColorLogo from './ColorLogo.png'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            EmailAddress: "",
            PW: "",
            PersonalData: []
        }
    }

    componentDidMount = () => {
        this.getPData();
    }

    getPData = () => {
        fetch('http://localhost:3000/MockSignInData.json')
            .then((response) => response.json())
            .then((response) => {
                console.log("나오나?:", response.SignInData)
                this.setState({ PersonalData: response.SignInData });
            })
    }


    render() {
        console.log("id and pw:", this.state)
        return (
            <div className="SignIn">
                <div className="ContentWrapper">
                    <div className="Logo">
                        <img src={ColorLogo} />
                    </div>
                    <h2>로그인</h2>
                    <div className="IdPwInput">
                        <div>이메일</div>
                        <input className="EmailAddress" onChange={this.GetEmail = (e) => { this.setState({ EmailAddress: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>비밀번호</div>
                        <input className="PW" onChange={this.GetPW = (e) => { this.setState({ PW: e.target.value }) }} type="password"></input>
                    </div>
                    <div className="WraptheBtn">
                        <button>
                            로그인
                            </button>
                        <button className="Join" >회원가입</button>
                    </div>
                    <div className="FindIdPw">아이디 / 비밀번호 찾기</div>
                </div>
            </div>
        )
    }
}
export default SignIn;