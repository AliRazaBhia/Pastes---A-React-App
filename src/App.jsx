
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navi from './components/Navi'
import HomePge from './components/HomePge'
import Paste from './components/Paste'
import Vpaste from './components/Vpaste'
const router = createBrowserRouter([{
  path:"/",
  element:<div>
    <Navi/>
    <HomePge/>
  </div>
  },
  {
    path:"/pastes",
    element:<div>
      <Navi/>
      <Paste/>
    </div>
  },
  {
    path:"/pastes/:id",
    element:<div>
      <Navi/>
     <Vpaste/>
    </div>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
