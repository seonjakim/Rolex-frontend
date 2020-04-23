import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NavBar.scss';
import RolexLogo2 from './pngfind.com-rolex-png-325547.png'

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            display: "block",
            show: false
        }
    }

DisapearNav = () => {
    this.setState({
        display: "none",
        show: true
    });
};

    render() {
        return (
            <div className="NavBar">
                <div className="EventHandler" style={{display:this.state.display}}>
                    <div className="TheTop">
                        <div className="LogoCenter">
                            <div className="LeftBox">
                                <div className="MenuTopLeft">
                                    <div>메뉴</div>
                                    <ul>
                                        <li>컬렉션</li>
                                        <li>롤렉스 세계</li>
                                        <li>공식 판매점 찾기</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Logo">
                                <img src={RolexLogo2} />
                            </div>
                            <div className="RightBox">
                                <div className="MenuTopRight">
                                    <div className="Search">검색하기</div>
                                    <div className="MyCollection" onClick={this.DisapearNav}>나의 셀렉션</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="TopBelow" >
                        홈   >   컬렉션
                    </div>
                    <div className="TheLeft">
                    </div>
                </div>                
            </div>
        )
    }
}


export default withRouter(NavBar);