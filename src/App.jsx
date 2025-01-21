import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import Home from './components/Home/Home';
import Usres, { UsersLoader } from './components/Usres/Usres';
import Posts, { postsLoader } from './components/Posts/Posts';
import About from './components/About/About';
import RootLayout from './components/Layout/RootLayout';
import { RouterProvider } from 'react-router';
import ContactLayout from './components/ContactLayout/ContactLayout';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ContactForm from './components/ContactForm/ContactForm';
import NotFount from './components/NotFound/NotFount';
import UsersLayout from './components/UsersLayout/UsersLayout';
import User from './components/Usre/User';
import PostsLayout from './components/PostsLayout/PostsLayout';
import Post from './components/Post/Post';
import PostDetails, { PostDetailsLoader } from './components/PostDetails/PostDetails';
import Error from './components/PostDetails/Error';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
        <Route path='users' element={<UsersLayout />}>
          <Route index element={<Usres />} loader={UsersLoader} />
          <Route index element={<User />} />
        </Route>
        <Route path='posts' element={<PostsLayout />} errorElement={<Error />} >
          <Route index element={<Posts />} loader={postsLoader} />
          <Route index element={<Post />} />
          <Route path=':id' element={<PostDetails />} loader={PostDetailsLoader}/>
        </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactLayout />} >
            <Route path='info' element={<ContactInfo />} />
            <Route path='form' element={<ContactForm />} />
          </Route>
          <Route path='*' element={<NotFount />} />
      </Route>
    )
  )



  return (
    <RouterProvider router={router} />
  )
}

export default App
