// import { Section } from "./style";
import './index.css';

export default function StarbucksSection() {
    return (
      <div className="App">
         <section>
          <div className="container">
            <div>
              <img src="starbucks/images/title.png" alt="title"/>
              <button><a href="#">자세히 보기</a></button>
              <img src="starbucks/images/strawberryacailemonade.png" alt="strawberryacailemonade"/>
            </div>
          <img className="img1" src="starbucks/images/purplesourblended.png" alt="purplesourblended"/>
          <img className="img2" src="starbucks/images/coffeedrawingmalcha.png" alt="coffeedrawingmalcha"/>
          </div>
         </section>
      </div>
    );
  }