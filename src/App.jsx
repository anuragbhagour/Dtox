import Navbar from "./components/navbar"
import Content from "./components/content"
import Home from "./components/home"
import Login from "./components/login"
import About from "./components/About"
import VideoPlayer from "./components/video_player"
import Services from "./components/services"  
import { createBrowserRouter , RouterProvider} from "react-router-dom"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",  
      element:<>
      <Navbar/> 
      <Home/>
      <Content/>
      <VideoPlayer/></>
    },
    {
      path: "/login",  
      element: <>
      <Navbar/>
      <Login/>
      </>
    },
    {
      path: "/About",  
      element: <>
      <Navbar/>
      <About/>
      </>
    },
    {
      path: "/services",  
      element: <>
      <Navbar/>
      <Services/>
      </>
    }


  ])
  return (
    <>
     
     <RouterProvider router={router}/>
     
    
    </>
  )
}

export default App
