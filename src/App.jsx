import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import Usres from './components/Usres/Usres';
import Posts from './components/Posts/Posts';
import Navber from './components/Navber/Navber';
import About from './components/About/About';


function App() {

  return (
    <>
      <Navber/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Usres />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
