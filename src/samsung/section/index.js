import "../global.css";
import "./style.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function SamsungSection() {
  return (
    <div className="App">
      <section className="banner">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <img
                src="https://www.samsungsem.com/resources/images/kr/main/main_video_thum1.jpg"
                alt=""
              />
              <p>
                5G 시대를 맞이하여 더 앞선 기술로
                <br />더 나은 세상을 열어 갑니다
              </p>
            </div>
            <div className="swiper-slide slide2">
              <img
                src="https://www.samsungsem.com/resources/images/kr/main/main_video_thum2.jpg"
                alt=""
              />
              <p>
                최첨단 스마트폰과 다양한 디바이스를 위한
                <br />
                최적의 솔루션으로 더 나은 내일을 만들고 있습니다
              </p>
            </div>
            <div className="swiper-slide slide3">
              <img
                src="https://www.samsungsem.com/resources/images/kr/main/main_video_thum3.jpg"
                alt=""
              />
              <p>
                4차 산업혁명을 현실로 만드는
                <br />
                첨단 융복합 기술을 이끌어 가고 있습니다
              </p>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-white"></div>

          <div className="swiper-button-prev swiper-button-white">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="swiper-button-next swiper-button-white">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </section>
    </div>
  );

  
}
