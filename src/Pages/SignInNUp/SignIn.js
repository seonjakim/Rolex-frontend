import React from 'react';
import ColorLogo from './ColorLogo.png'
import './SignIn.scss';

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
                        <img src={ColorLogo} alt="color logo" />
                    </div>
                    <h2>로그인</h2>
                    <div className="IdPwInput">
                        <div>이메일</div>
                        <input className="EmailAddress" onChange={(e) => { this.setState({ EmailAddress: e.target.value }) }}></input>
                    </div>
                    <div className="IdPwInput">
                        <div>비밀번호</div>
                        <input className="PW" onChange={(e) => { this.setState({ PW: e.target.value }) }} type="password"></input>
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