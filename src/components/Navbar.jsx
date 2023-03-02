import logo from "../assets/SweetDough.png";

export default function Navbar () {
    return (
        
        <>
        <div><a href="#"><img src={logo} alt="Sweet Dough rising logo" style={{width:"100%"}}></img></a></div>
         <nav>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        </nav>
        </>
    );
}