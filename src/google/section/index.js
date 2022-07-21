import React from "react";
import { GoogleSection, GoogleLogo, GoogleSearch, GoogleInput,GoogleButton } from "./styles";

export default function Google_Section() {
    return (
        <div className="App">
            <GoogleSection>
                <GoogleLogo>
                    <img src="./google_logo.svg" alt="GoogleLogo"></img>
                </GoogleLogo>
                <GoogleSearch>
                    <GoogleInput>
                        <img src="./search.svg" alt="search" />
                        <input type="search" placeholder="Gogle 검색 또는 URL 입력" />
                        <button><img src="./googlemic_clr_24px.svg" alt="microphone"></img></button>
                    </GoogleInput>
                <GoogleButton>
                    <button type="submit">Google 검색</button>
                    <button>I'm Feeling Lucky</button>

                </GoogleButton>
                </GoogleSearch>
                
            </GoogleSection>
        </div >
    );
}