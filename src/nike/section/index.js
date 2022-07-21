import React from "react";
import { Section } from "./styles";
import "./index.css";

export default function Nike_Section() {
    return (
        <div className="App">
            <Section>
            <div className="img">
                <a href="#">
                    <img src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220713_hp_p4_bg.jpg"
                            alt="mainimage2" class="main_img">
                    </img>
                </a>
            </div>
            <div className="text">
            <p class="txt-jordan23">조던 그래픽 티셔츠</p>
            <p class="txt-member">조던의 헤리티지가 담긴 조던 그래픽 티셔츠와 함께<br></br>
                    나만의 스타일을 완성하세요</p>
            <button class="buy-button btn"><a href="#">구매하기</a></button>
            </div>
            </Section>
        </div>
    );
}