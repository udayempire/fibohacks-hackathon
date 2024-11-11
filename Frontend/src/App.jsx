import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Home } from './pages/Home'
import { Events } from './pages/Events'
import './App.css'
import { EventsVolunteer } from './pages/EventsVolunteer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />}/>
          <Route path="/events/volunteer" element={<EventsVolunteer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
