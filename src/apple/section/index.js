import React from "react";
import { Section } from "./styles";
import './style.css';


export default function Sections() {
    return (
        <div>
            <Section>
            
                <div className="body">
                    <img src="./apple-img/Macbook.jpg"></img>
                </div>
                <a href="#" className="buy">더 알아보기 ></a>
                <a href="#" className="buy">구입하기 ></a>
            </Section>
        </div>
    );
}