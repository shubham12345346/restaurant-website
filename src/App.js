import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import  Menu  from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';


function App() {
  return (
<>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/about" element={<About/>} />
        <Route path="menu" element={<Menu/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
