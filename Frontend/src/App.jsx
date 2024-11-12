import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Home } from './pages/Home'
import { Events } from './pages/Events'
import { EventsVolunteer } from './pages/EventsVolunteer'
import { EventsHackathons } from './pages/EventsHackathons'
import { EventsEntertainment } from './pages/EventsEnter'  
import { TicketGenerate1 } from './pages/TicketGenerate-1'
import { TicketGenerate2 } from './pages/TicketGenerate-2'
import { TicketGenerate3 } from './pages/TicketGenerate-3'
import { TicketGenerate4 } from './pages/TicketGenerate-4'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events />}/>
          <Route path="/events/volunteer" element={<EventsVolunteer />} />
          <Route path="/events/hackathons" element={<EventsHackathons />} />
          <Route path="/events/entertainments" element={<EventsEntertainment />} />
          <Route path="/ticket-generate-1" element={<TicketGenerate1 />} />
          <Route path="/ticket-generate-2" element={<TicketGenerate2/>}/>
          <Route path="/ticket-generate-3" element={<TicketGenerate3/>}/>
          <Route path="/ticket-generate-4" element={<TicketGenerate4/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
