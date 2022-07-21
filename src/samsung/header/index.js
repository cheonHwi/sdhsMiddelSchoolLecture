import "../global.css";
import "./index.css";

export default function SamsungHeader() {
  return (
    
    <div>
      <header>
        <div className="container">
          <h1 className="logo">
            <a href="#" title="삼성전기">
              삼성전기
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li>
                <a href="">기업정보</a>
              </li>
              <li>
                <a href="">인재채용</a>
              </li>
              <li>
                <a href="">뉴스룸</a>
              </li>
              <li>
                <a href="">제품정보</a>
              </li>
              <li>
                <a href="">고객지원</a>
              </li>
            </ul>
          </nav>
          <div className="util-area">
            <div className="sns util-inner">
              <a href="">SNS</a>
            </div>
            <div className="lang util-inner">
              <a href="">KOR</a>
            </div>
            <div className="search util-inner">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
