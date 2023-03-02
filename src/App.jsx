
import './App.css'
import About from './components/About';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

function App() {
 

  return (
<div className='fill-height'>
<Navbar/>
<Announcement/>
<Gallery/>
<Menu/>
<About/>
<Footer/>
</div>
  );
}

export default App
