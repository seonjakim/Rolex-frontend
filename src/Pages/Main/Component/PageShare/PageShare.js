import React, { Component } from "react";
import TwitterIcon from "../../../../Images/TwitterIcon";
import FacebookIcon from "../../../../Images/FacebookIcon";
import PinterestIcon from "../../../../Images/PinterestIcon";
import LinkedinIcons from "../../../../Images/LinkedinIcons";
import ShowMoreIcon from "../../../../Images/ShowMoreIcon";
import WeiboIcon from "../../../../Images/WeiboIcon";
import QQIcon from "../../../../Images/QQIcon";
import DoubanIcon from "../../../../Images/DoubanIcon";
import "./PageShare.scss";

export default class PageShare extends Component {
  state = {
    txtIconDisplay: true,
  };

  render() {
    return (
      <div className="pageShare">
        <div
          className={
            this.state.txtIconDisplay ? "shareTxtNIcon" : "shareTxtNIconClick"
          }
        >
          <div className="shareTxt">이 페이지 공유하기</div>
          <div className="shareIcon">
            <div>
              <button>
                <TwitterIcon />
              </button>
            </div>
            <div>
              <button>
                <FacebookIcon />
              </button>
            </div>
            <div>
              <button>
                <PinterestIcon />
              </button>
            </div>
            <div>
              <button>
                <LinkedinIcons />
              </button>
            </div>

            {this.state.txtIconDisplay && (
              <div>
                <button
                  onClick={() => this.setState({ txtIconDisplay: false })}
                >
                  <ShowMoreIcon />
                </button>
              </div>
            )}

            {!this.state.txtIconDisplay && (
              <>
                <div>
                  <button>
                    <WeiboIcon />
                  </button>
                </div>
                <div>
                  <button>
                    <QQIcon />
                  </button>
                </div>
                <div>
                  <button>
                    <DoubanIcon />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
