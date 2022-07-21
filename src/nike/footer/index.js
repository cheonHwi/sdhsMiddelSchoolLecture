import React from "react";
import { Footer } from "./styles";
import "./index.css";

export default function Nike_Footer() {
  return (
    <div className="App">
      <Footer>
        <div className="language">
          <div className="up">
            <span>
              <a href="#">
                <img src="./Nike_img/location.png" alt="locate"></img>대한민국
              </a>
            </span>&ensp;&ensp;
            ⓒ 2021 Nike, Inc. All Rights Reserved
          </div>
          <div className="down">
                <a href="#">이용약관</a>&ensp;&ensp;&ensp;
                <a href="#/">개인정보처리방침</a>
          </div>
        </div>
      </Footer>
    </div>
  );
}
