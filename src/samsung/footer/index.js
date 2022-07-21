import "../global.css";
import "./style.css";

export default function SamsungFooter() {
  return (
    <div className="App">
      <footer>
        <div className="footer_inner">
          <div className="footer_top">
            <div className="menu_area">
              <ul className="menu_list1">
                <li>
                  <a href="">윤리경영</a>
                </li>
                <li>
                  <a href="">보안신고</a>
                </li>
                <li>
                  <a href="">고객문의</a>
                </li>
                <li>
                  <a href="">방문신청</a>
                </li>
              </ul>
            </div>
            <div className="link_area">
              <ul className="sns_list">
                <li className="youtube">
                  <a href="">유튜브</a>
                </li>
                <li className="blog">
                  <a href="">블로그</a>
                </li>
                <li className="facebook">
                  <a href="">페이스북</a>
                </li>
                <li className="linkedin">
                  <a href="">링크드인</a>
                </li>
              </ul>
              <div className="mark">
                <a href="">
                  <img
                    src="https://www.samsungsem.com/resources/images/kr/common/footer_mark1.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="menu_area">
              <ul className="menu_list2">
                <li>
                  <a href="">이용약관</a>
                </li>
                <li>
                  <a href="">이메일무단수집거부</a>
                </li>
                <li className="point">
                  <a href="">개인정보처리방침</a>
                </li>
                <li>
                  <a href="">영상정보처리기기 운영관리방침</a>
                </li>
                <li>
                  <a href="">아이디어 정책</a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <small>
                Copyright. SAMSUNG ELECTRO-MECHANICS All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
