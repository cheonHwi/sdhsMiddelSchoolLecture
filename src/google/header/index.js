import React from "react";
import { GogleHeader, Goglenav1, Gb_ue, Goglenav2 } from "./styles";

export default function Gogle_Header() {
    return (
        <div className="App">
            <GogleHeader>
                <Goglenav1>
                    <a>Gogle정보</a>
                    <a>스토어</a>
                </Goglenav1>
                <Goglenav2>
                    <a>Gmail</a>
                    <a>이미지</a>
                    <Gb_ue focusable="false" viewBox="0 0 24 24">
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                    </Gb_ue>
                    <img src="https://lh3.googleusercontent.com/ogw/AOh-ky2sDeVXfsSnnIHcjT7CQ1R0eOTXr7YI_GlnuuJu=s32-c-mo" alt="profile"></img>
                </Goglenav2>
            </GogleHeader>
        </div >
    );
}