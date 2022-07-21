import React from "react";
import { GogleSection, GogleLogo, GogleSearch, GoogleInput } from "./styles";

export default function Gogle_Section() {
    return (
        <div className="App">
            <GogleSection>
                <GogleLogo>
                    <img src="./google_logo.svg" alt="GoogleLogo"></img>
                </GogleLogo>
                <GogleSearch>
                    <GoogleInput>
                        <img src="./search.svg" alt="search" />
                        <input type="search" placeholder="Gogle 검색 또는 URL 입력" />
                        <button><img src="./googlemic_clr_24px.svg" alt="microphone"></img></button>
                    </GoogleInput>

                </GogleSearch>
            </GogleSection>
        </div >
    );
}