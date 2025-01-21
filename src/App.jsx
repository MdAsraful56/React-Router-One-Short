import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import Home from './components/Home/Home';
import Usres from './components/Usres/Usres';
import Posts from './components/Posts/Posts';
import About from './components/About/About';
import RootLayout from './components/Layout/RootLayout';
import { RouterProvider } from 'react-router';
import ContactLayout from './components/ContactLayout/ContactLayout';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ContactForm from './components/ContactForm/ContactForm';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='users' element={<Usres />} />
          <Route path='posts' element={<Posts />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactLayout />} >
            <Route path='info' element={<ContactInfo />} />
            <Route path='form' element={<ContactForm />} />
          </Route>
      </Route>
    )
  )



  return (
    <RouterProvider router={router} />
  )
}

export default App
