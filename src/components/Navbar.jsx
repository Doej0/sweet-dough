import logo from "../assets/SweetDough.png";
import "./navbar.css"

export default function Navbar() {
  return (
    <header>
      <div className="site-brand-logo">
        <a href="#">
          <img
            src={logo}
            alt="Sweet Dough rising logo"
          ></img>
        </a>
      </div>
      <nav className="site-nav">
      <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
        
      </nav>
    </header>
  );
}
