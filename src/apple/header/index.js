import { Header } from "./styles";
import './index.css';

export default function Headers() {
    return (
      <div className="App">
          <Header>
            <div>
              <ul>
                <li><a href="#"><img src="/apple-img/apple.png" alt="logo" className="logo"></img></a></li>
                <li><a href="#">스토어</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">TV 및 홈</a></li>
                <li><a href="#">Apple 독점 제공</a></li>
                <li><a href="#">액세서리</a></li>
                <li><a href="#">고객지원</a></li>
                <li><a href="#"><img src="/apple-img/search.png" alt="search-icon" className="logo"></img></a></li>
                <li><a href="#"><img src="/apple-img/shopping.png" alt="shopping-icon" className="logo"></img></a></li>
              </ul>
            </div>
          </Header>
      </div>
    );  
  }