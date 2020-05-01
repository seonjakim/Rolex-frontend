import React from 'react';
import './SlidingShow.scss';

class SlidingShow extends React.Component {
    render() {
        return (
            <div className="SlidingShow">
                <div className="forUl">
                    <ul>
                        <li>
                            <div>디자인</div>
                            <div>
                                품격을 담은<br />  시계
                            </div>
                        </li>
                        <li>
                            <img src="https://content.rolex.com/dam/watches/family-pages/day-date/roller-design/classic-watches-day-date-yellow-gold_m228238-0006_1501ac_002.jpg?imwidth=720" />
                            {/* <span></span>
                            <span></span> */}
                        </li>
                        <li>
                            베젤은<br />
                            플루티드 베젤,<br />
                            스무스 베젤<br />
                            또는 보석이 세팅된<br />
                            베젤이 사용됩니다.
                        </li>
                        <li>
                            <img src="https://content.rolex.com/dam/watches/family-pages/day-date/roller-design/classic-watches-day-date-front-facing_m128238_0069_1901ac_001.jpg?imwidth=720" />
                        </li>
                        <li>
                            <div>
                                <img src="https://content.rolex.com/dam/watches/family-pages/day-date/roller-design/classic-watches-day-date-day-display_m128238_0069_1901ac_007.jpg?imwidth=360" />
                            </div>
                            <div>
                                <img src="https://content.rolex.com/dam/watches/family-pages/day-date/roller-design/classic-watches-day-date-president-bracelet_m128238-0069_1901ac_009.jpg?imwidth=1920" />
                            </div>
                        </li>
                        <li>
                            반원형 링크 3열로 구성된 메탈 소재의 프레지던트(president) 브레슬
                            릿은 오이스터 퍼페츄얼 데이-데이트(Oyster Perpetual Day-Date)의
                            1956년 출시를 위해 특별히 제작되었습니다. 세련미와 편안함을 상징
                            하는 프레지던트 브레슬릿은 롤렉스가 엄선한 최고급 메탈로 제작됩
                            니다. 데이-데이트(Day-Date)는 세계 각국의 언어로 표시됩니다.
                        </li>
                        <li>
                            <img src="https://content.rolex.com/dam/watches/family-pages/day-date/roller-design/classic-watches-day-date-green-dial-watchmaking_m228235_0025_16th_001.jpg?imwidth=720" />
                        </li>
                        <li>
                            <img src="https://content.rolex.com/dam/watches/family-pages/day-date/roller-design/classic-watches-day-date-crown-green-dial_rmc_1704mg_001.jpg?imwidth=720" />
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default SlidingShow;