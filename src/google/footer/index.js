import React from "react";
import { GoogleFooter,GoogleTop,GoogleBottom } from "./style";

export default function Google_Footer() {
    return (
        <div className="App">
            <GoogleFooter>
                <GoogleTop>
                    <p>대한민국</p>
                </GoogleTop>
                <GoogleBottom>
                    <div>
                        <a>광고</a>
                        <a>비지니스</a>
                        <a>검색의 원리</a>
                    </div>
                    <div>
                        <a>개인정보처리방침</a>
                        <a>약관</a>
                        <a>설정</a>
                    </div>
                </GoogleBottom>
            </GoogleFooter>
        </div>
    );
}