// import { Header } from "./style";
// import { Container } from './style';
// import { Menu } from "./style";
// import { MainMenu } from './style';
import './index.css';

export default function StarbucksHeaders() {
    return (
      <div className="App">
         <header>
           <div className="container">
             <h1>
               <a href="#"><img src="starbucks/images/logo.png" alt="starbuck-logo"/></a>
             </h1>
             <div className="nemu">
                <nav className="mainMenu">
                  <ul>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">My Starbucks</a></li>
                    <li><a href="#">Customer Service &#38; Ideas</a></li>
                    <li><a href="#">Find a Store</a></li>
                    <button><img src="starbucks/images/search.png" alt="search-btn"/></button>
                  </ul>
                </nav>
                <nav className="subMenu">
                  <ul>
                    <li><a href="#">COFFEE</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">STORE</a></li>
                    <li><a href="#">RESPONSIBLITY</a></li>
                    <li><a href="#">STARBUCKS REWARDS</a></li>
                    <li><a href="#">WHAT'S NEW</a></li>
                  </ul>
                </nav>
             </div>
           </div>
         </header>
      </div>
     
    );
  }