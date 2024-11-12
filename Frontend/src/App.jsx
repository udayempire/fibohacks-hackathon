import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Home } from './pages/Home'
import { Events } from './pages/Events'
import { EventsVolunteer } from './pages/EventsVolunteer'
import { EventsHackathons } from './pages/EventsHackathons'
import { EventsEntertainment } from './pages/EventsEnter'  
import './App.css'
import { TicketCreate } from './pages/TicketCreate'

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
          <Route path="/events/hackathons" element={<EventsHackathons />} />
          <Route path="/events/entertainments" element={<EventsEntertainment />} />
          <Route path="/ticket-generate" element={<TicketCreate />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
