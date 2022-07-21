import React from "react";
import { Footer } from "./styles";
import './Footer.css'

export default function Footers() {
    return (
        <div className="App">
            <Footer>
                <div className="footercontent">
                    <div className="topfooter">
                        <span>무료 체험 기간이 끝나면 월 6,500원에 이용할 수 있습니다. 본인 또는 가족 구성원이 구입한 기기 수에 상관없이, 무료 체험 혜택은 Apple ID당 한 번 또는 본인이 ‘가족 공유’ 그룹의 구성원일 경우 그룹당 한 번만 제공됩니다. 본인
                           또는 가족 구성원이 이미 Apple TV+ 3개월 무료 체험 혜택을 이용한 경우에는 이 혜택을 이용할 수 없습니다. 무료 체험 혜택은 적용 대상 기기 활성화 이후 3개월 안에 신청할 수 있습니다. 멤버십은 매월 자동으로 갱신되며, 해지 시
                            종료됩니다. 특정 제한 사항 및 기타 약관이 적용됩니다.</span>
                    </div>
                    <hr></hr>
                    <div className="bottomfooter">
                    <span>Copyright &copy; 2022 Apple Inc. 모든 권리 보유.</span>
                    <span className="weight">대한민국</span>
                    </div>
                </div>
            </Footer>
        </div>
    );
}