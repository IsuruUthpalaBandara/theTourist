import React from 'react';
import './Navbar.css';
import Home from '../Home';
import {createBrowserRouter,RouterProvider,Link} from "react-router-dom";
import Signin from './Signin';
import Login from './Login';
import Profile from '../Profile';


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
        <h1>the Tourist</h1>
        <ul className='nav'>
        <li id="home"><button>Home</button></li>
        <li id="articles"><button>Articles</button></li>
        <li id="gallery"><button>Gallery</button></li>
        <li id="destinations"><button>Destinations</button></li>
        <li id="aboutus"><Link to="profile"><button>Profile</button></Link></li>
        <li id="login"><Link to="login"><button>Log In </button></Link></li>
        <li id="signin"><Link to="signin"><button> Sign Up</button></Link></li>
        </ul>
          
            
        <Home/>
        </div>
      )
    },
    {
      path: "signin",
      element: <Signin/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path:"profile",
      element:<Profile/>
    }
  
  
  ]);

export default function Navbar() {
  
  return (
    <div>
        
        <RouterProvider router={router} />


       
    </div>
  )
}


/////////////////////////////////////////////////////////

