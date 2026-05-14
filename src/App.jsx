import { createBrowserRouter, Link, Navigate, NavLink, RouterProvider } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Layout from "./Layout.jsx"
import Portfolio from "./Portfolio.jsx"
import About from './About';
import Contact from './Contact';
import Notfound from './Notfound';
import Home from "./Home.jsx"


function App() {

 const router= createBrowserRouter([

  

  {path:"",element:<Layout/>,children:[
    {index:true,element:<Navigate to={"home"} />},
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
        {path:"contact",element:<Contact/>},
        {path:"*",element:<Notfound/>}


  ]}
    
  ])

  return (
<>
<RouterProvider router={router}/>


</>
  )
}

export default App
