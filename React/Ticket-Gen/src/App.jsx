import { Provider, useDispatch } from 'react-redux'
import store from './redux/store'
import { useSelector } from 'react-redux'
import { addTicket, removeTicket, updateTicket, toggleTicket, filterTicket } from './redux/ticketSlicer'
import './App.css'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.ticket.tickets)
  const filter = useSelector((state) => state.ticket.filter)
  
  useEffect(()=>{
    
  })

  return (
    <>
    </>
  )
}

export default App
