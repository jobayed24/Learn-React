import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import Reset from './components/Reset'
import SignIn from './components/SignIn'
import PrivateRoutes from './routes/PrivateRoutes'
function App() {
  

  return (
    <div>
     <Router>
        <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} exat />
          <Route path='/me' element={<Profile />} />
        </Route>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/reset' element={<Reset />} />
        </Routes>
     </Router>
    </div>
  )
}

export default App
