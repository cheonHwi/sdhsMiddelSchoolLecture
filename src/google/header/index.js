import React from "react";
import {GogleHeader } from "./styles";

export default function Gogle_Header() {
    return (
        <div className="App">
            <GogleHeader>
                <a>Gogle 정보</a>
                <a>스토어</a>
                <div>
                    <a>Gmail</a>
                    <a>이미지</a>
                </div>
            </GogleHeader>
        </div>
    );
}