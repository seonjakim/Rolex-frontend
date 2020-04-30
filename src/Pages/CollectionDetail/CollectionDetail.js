import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DisplayWithHeart from './Components/DisplayWithHeart'
import SideSlideDayDate from './Components/SideSlideDayDate/SideSlideDayDate'
import './CollectionDetail.scss';

class CollectionDetail extends Component {
    constructor(props) {
        super(props);
        console.log({ props })
    }
    render() {
        return (
            <div className='CollectionDetail'>
                <div className="videoBox">
                    <video
                        src="https://content.rolex.com/dam/watches/family-pages/day-date/video/cover/classic-watches-day-date-cover-video.mp4"
                        type="video/mp4"
                        autoPlay
                        muted
                        playsinline
                        loop
                        preload="auto"
                        className="sc-pRTZB jXSwJn"
                    />
                    <div className="videoTitle">
                        <div>DAY-DATE</div>
                        <div>품격 있는 시계의 상징</div>
                    </div>
                </div>
                <div className="LetteringBelowVedio">
                    <div className="LetteringWrapper">
                        <p>
                            1956년, 탄생한 데이-데이트(Day-Date)는 다이얼에 날짜뿐만 아니라 약자가 아닌 전체 단어로 표시된 요일이 순간적으로 바뀌는 현대적인 캘린더 기능을 창작한 최초의 방수 오토매틱 크로노미터 손목시계입니다.
                        </p>
                        <p>
                            탁월한 정밀함과 신뢰성, 가독성 그리고 독보적인 존재감을 자랑하는 이 품격 있는 모델은 가장 높은 명성을 자랑하는 시계로 자리 잡았습니다.
                        </p>
                    </div>
                </div>
                <DisplayWithHeart />
                <div className="TwoButton">
                    <button>
                        설정
                    </button>
                    <button>
                        모두 보기
                    </button>
                </div>
                <div className="movingPic">
                    <div>
                        <img src="https://content.rolex.com/dam/watches/family-pages/day-date/classic-watches-day-date-roman-numerals_m228238_0042_1704mg2_001.jpg?imwidth=1112, https://content.rolex.com/dam/watches/family-pages/day-date/classic-watches-day-date-roman-numerals_m228238_0042_1704mg2_001.jpg?imwidth=1668 2x" />
                    </div>
                    <div>
                        <img src="https://content.rolex.com/dam/watches/family-pages/day-date/classic-watches-day-date-yellow-gold_m228238_0006_1501ac_003_portrait.jpg?imwidth=420, https://content.rolex.com/dam/watches/family-pages/day-date/classic-watches-day-date-yellow-gold_m228238_0006_1501ac_003_portrait.jpg?imwidth=840 2x" />
                    </div>

                </div>
                {/* <SideSlideDayDate /> */}
                <div class="carousel carousel-wrap">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="bracelet">
                    <img src="https://content.rolex.com/dam/watches/family-pages/day-date/classic-watches-day-date-president-bracelet_m118238_0419_1806ac_001.jpg?imwidth=1112, https://content.rolex.com/dam/watches/family-pages/day-date/classic-watches-day-date-president-bracelet_m118238_0419_1806ac_001.jpg?imwidth=1668 2x" />
                </div>
                <div className="lettering">
                    <div>
                        데이-데이트 40 (Day-Date 40)은 최상의 성능을 구현하기 위하여 롤렉스에서 직접 개발하고
                        제작한 차세대 무브먼트인 칼리버 3255를 탑재하고 있습니다. 이 새로운 오토매틱 와인
                        메케니컬 무브먼트는 워치메이킹 기술의 정점입니다. 14개의 롤렉스 특허를 포함, 롤렉
                        스의 워치메이킹 기술이 고스란히 담겨 있는 무브먼트로 정밀함, 파워리저브, 충격과 자기
                        장에 대한 저항, 사용의 편의성, 신뢰도 등의 다양한 측면에서 핵심적인 성과를 보여줍니다.
                    </div>
                </div>
                <div className="insidePic">
                    <video src="https://content.rolex.com/dam/watches/family-pages/day-date/video/classic_watches_day-date_movement_auto_play_0001.mp4" />
                </div>
            </div>
        )
    }
}

export default withRouter(CollectionDetail);