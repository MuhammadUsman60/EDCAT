
import './App.css';
import Navbar from './components/navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Team from './components/team';
import Service from './components/service';
import About from './components/about';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';
import Samples from './components/samples';
import Footer from './components/footer';

function App() {

  const router = createBrowserRouter([
        {
          path:"/",
          element: <><Navbar /><Home /><Footer/></>
        },
        {
          path:"/about",
          element:<><Navbar /><About /><Footer/></>
        },
        {
          path:"/service",
          element:<><Navbar /><Service /><Footer/></>
        },
        {
          path:"/projects",
          element:<><Navbar /><Projects /><Footer/></>
        },
        {
          path:"/blog",
          element:<><Navbar /><Blog /><Footer/></>
        },
        {
          path:"/contact",
          element:<><Navbar /><Contact /><Footer/></>
        },
        {
          path:"/samples",
          element:<><Navbar /><Samples /><Footer/></>
        },
    
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>

  );
}

export default App;
