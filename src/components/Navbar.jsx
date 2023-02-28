import logo from "../assets/SweetDough.png";

export default function Navbar () {
    return (
        
        <>
        <div className="w3-center"><img src={logo} alt="Sweet Dough rising logo" style={{width:"40%"}}></img></div>
         <nav className="w3-bar w3-black w3-center">
        <a href="#" className="w3-bar-item w3-button w3-large w3-mobile"style={{width:"33.33%"}}>Menu</a>
        <a href="#" className="w3-bar-item w3-button w3-large w3-mobile"style={{width:"33.33%"}}>About</a>
        <a href="#" className="w3-bar-item w3-button w3-large w3-mobile"style={{width:"33.33%"}}>Contact</a>
        </nav>
        </>
    );
}