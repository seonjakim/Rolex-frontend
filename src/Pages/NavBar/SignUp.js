import React from 'react';
import './SignUp.scss';
import ColorLogo from './ColorLogo.png'


class SignUp extends React.Component {
    render(){
        return(
            <div className="SignUp">
                <div className="ContentWrapper">
                    <div className="Logo">
                        <img src={ColorLogo} />
                    </div>
                    <h2>회원가입</h2>
                        <div className="IdPwInput">
                            <p>이름</p>
                            <input></input>
                        </div>
                        <div className="IdPwInput">
                            <p>이메일</p>
                            <input></input>
                        </div>
                        <div className="IdPwInput">
                            <p>비밀번호</p>
                            <input type="password"></input>
                        </div>
                        <div className="IdPwInput">
                            <p>비밀번호 확인</p>
                            <input></input>
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