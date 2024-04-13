import '../css/App.css'
import About from '../pages/About';
import Home from '../pages/Home';
import Unity from '../pages/Unity';
import Navig from './Navig';
import Solar3D from './Solar3D';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>

      <Navig />
      <div style={{display: "flex", flexDirection:"column",justifyContent:"space-between"}}>
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/unity' element={<Unity />} />
      </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App
