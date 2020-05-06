import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PageShare from "../Main/Component/PageShare/PageShare";
import "./Detail.scss";
import "../Main/Component/PageShare/PageShare.scss";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      meta: {},
      des: {},
      main: {},
      hover: false,
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/detailData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          meta: res.product.metadata,
          des: res.product.description,
          main: res.product.main_features,
        });
      });
  };
  render() {
    const { meta, des, main } = this.state;
    return (
      <div className="detail">
        <div
          className="mainPicContainer"
          style={{ backgroundImage: `url(${meta.bg_image})` }}
        >
          <div
            className="mainPic"
            style={{ backgroundImage: `url(${meta.watch_image})` }}
          ></div>
          <div className="mainPicDesc">
            <div className="cate">{meta.category}</div>
            <div className="collection">{meta.collection}</div>
            <div className="des">
              {meta.is_oyster && "오이스터,"}
              {`${meta.size}mm,${meta.material}`}
            </div>
            <div className="price">{`${meta.price}₩`}</div>
          </div>
        </div>
        <div className="mainDetail">
          <div className="detailTxt">
            <div>{des.first_paragraph}</div>
            <div>{des.second_paragraph}</div>
          </div>
        </div>
        <div className="dialPicContainer">
          <div className="dialPic">
            <div
              style={{ backgroundImage: `url(${main.thumbnail_image})` }}
            ></div>
          </div>
          <div className="dialPicTxt">
            {/* 100글자 뒤에 니다로 끝내기 */}
            <h3>{main.title}</h3>
            <h4>{main.sub_title}</h4>
            <div>{main.description}</div>
            <div>자세히 보기</div>
          </div>
        </div>
        <div className="modelDetail">
          <div className="detailContainer">
            <div className="detailTxt"></div>
            <div className="detailCarousel"></div>
          </div>
        </div>
        <div className="rolexRetail">
          <div className="retailContainer">
            <div className="retailPic">
              <div></div>
            </div>
            <div className="retailTxt">
              <div>롤렉스 공식 판매점 연락처</div>
              <div>
                롤렉스 컬렉션의 클래식 시계 및 프로페셔널 시계는 어떤 환경이나
                스타일에도 어울리며 다양한 소재와 다이얼, 브레슬릿, 사이즈로
                선보입니다.
              </div>
              <div>판매점 연락처</div>
            </div>
          </div>
        </div>
        <div
          className="collectionWorld"
          onMouseEnter={() => {
            this.setState({ hover: true });
          }}
          onMouseLeave={() => {
            this.setState({ hover: false });
          }}
        >
          <div className={this.state.hover ? "retailPicHover" : "retailPic"} />
          <div className="retailTxt">
            <div className="findRetail">DAY-DATE 세계</div>
            <button className={this.state.hover ? "buttonHover" : "button"}>
              자세히 보기
            </button>
          </div>
        </div>
        <PageShare />
      </div>
    );
  }
}

export default withRouter(Detail);
