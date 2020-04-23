import React from 'react';
import './SignIn.scss';
import ColorLogo from './ColorLogo.png'

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            showNav: "block",
            change: "none"
        }
    }

    ClickToNav = () => {
        this.setState({
            showNav: "none"
        })
    }

    ChangeToSignUp = () => {
        this.setState({
            change: "block"
        })
    }

    render(){
        return(
            <div className="SignIn">
                <div className="WrapTransit">
                    <div className="ContentWrapper">
                        <div className="Logo">
                            <img src={ColorLogo} />
                        </div>
                        <h2>로그인</h2>
                            <div className="IdPwInput">
                                <p>이메일</p>
                                <input></input>
                            </div>
                            <div className="IdPwInput">
                                <p>비밀번호</p>
                                <input type="password"></input>
                            </div>
                        <div className="WraptheBtn">
                            <button>
                                로그인
                            </button>
                            <button className="Join" onClick={this.ChangeToSignUp}>회원가입</button>
                        </div>
                        <div className="FindIdPw">아이디 / 비밀번호 찾기</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;