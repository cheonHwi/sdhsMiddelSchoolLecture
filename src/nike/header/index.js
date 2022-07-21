import React from "react";
import { Header } from "./styles";
import "./index.css";
export default function Nike_Headers() {
  return (
    <div className="App">
      <Header>
        <div className="upheader">
            <div className="joco1">
              <ul className="joco">
                <li><a href="#" className="abrand"><img src="./Nike_img/jorden.png" className="brand"></img></a></li>
                <li><a href="#" className="abrand"><img src="./Nike_img/convarse.png" className="brand"></img></a></li>
              </ul>
            </div>
            <div className="contents"><a href="#">고객센터</a>    |    <a href="#">맴버 가입</a>    |    <a href="#">로그인</a></div>
        </div>
        <div className="downheader">
          <div className="logo">
            <img src="./Nike_img/Logo_NIKE.png" alt="logo" className="Logo"></img>
          </div>
          <div className="menu1">
            <ul className="menu">
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div className="gather">
            <div class="search">
                <a href="#" class="search_icon"><img src="./Nike_img/search.png" alt="search_icon"
                        id="search_png"></img></a>
                <input className="search-input" type="search" size="17" placeholder="            검색"
                    onfocus="placeholder=''" onblur="placeholder='           검색'" name="search" id="search_input"></input>
            </div>
            <div class="icon_sell">
                <a href="#" class="icon"><img src="./Nike_img/heart.png" alt="heart_icon"
                        class="icon_img"></img></a>
                <a href="./shopping-basket.html" class="bag_icon"><img src="./Nike_img/bag.png"
                        alt="bag_icon" class="icon_img"></img></a>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
