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
                        class="sc-pRTZB jXSwJn"
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

                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default withRouter(CollectionDetail);