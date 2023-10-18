import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import NotFound from './Components/NotFound/NotFound'
import Tv from './Components/Tv/Tv'
import About from './Components/About/About'
import ItemDetails from './Components/ItemDetails/ItemDetails'



export default function App() {
  let routers = createBrowserRouter([
    { path: '/', element:<RootLayout/>,children:[
      {index:true , element:<Home/>},
      {path:'home' , element:<Home/>},
      {path:'about' , element:<About/>},
      {path:'movies' , element:<Movies/>},
      {path:'tv' , element:<Tv/>},
      {path:'details/:media/:id' , element:<ItemDetails/>},
      {path:'*' , element:<NotFound/>},


    ] }
  ])
  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}
