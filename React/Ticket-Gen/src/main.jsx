import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store, addTicket, selectTicket } from './store'

// 1. A simple component that shows the ticket list
function TicketList() {
  // Read tickets and selectedTicketId from Redux
  const ticketsState = useSelector(function (state) {
    return state.tickets
  })

  const dispatch = useDispatch()

  // Simple click handler to select a ticket
  function handleSelect(id) {
    dispatch(selectTicket(id))
  }

  return (
    <div style={{ padding: '16px' }}>
      <h2>Ticket List</h2>
      {ticketsState.tickets.length === 0 && (
        <p>No tickets yet</p>
      )}

      <ul>
        {ticketsState.tickets.map(function (ticket) {
          const isSelected = ticket.id === ticketsState.selectedTicketId
          return (
            <li
              key={ticket.id}
              onClick={function () { handleSelect(ticket.id) }}
              style={{
                cursor: 'pointer',
                padding: '8px',
                marginBottom: '4px',
                border: '1px solid #ccc',
                backgroundColor: isSelected ? '#e0f7fa' : '#fff'
              }}
            >
              <strong>{ticket.subject}</strong> - {ticket.user} ({ticket.status})
            </li>
          )
        })}
      </ul>

      <SelectedTicketInfo />
    </div>
  )
}

// 2. A simple component to show selected ticket details
function SelectedTicketInfo() {
  const ticketsState = useSelector(function (state) {
    return state.tickets
  })

  const selected = ticketsState.tickets.find(function (t) {
    return t.id === ticketsState.selectedTicketId
  })

  if (!selected) {
    return <p>Select a ticket to see details</p>
  }

  return (
    <div style={{ marginTop: '16px', padding: '12px', border: '1px solid #aaa' }}>
      <h3>Ticket Details</h3>
      <p><strong>Subject:</strong> {selected.subject}</p>
      <p><strong>User:</strong> {selected.user}</p>
      <p><strong>Status:</strong> {selected.status}</p>
      <p><strong>Description:</strong> {selected.description}</p>
    </div>
  )
}

// 3. Root App component that adds some dummy tickets once
function App() {
  const dispatch = useDispatch()
  const ticketsState = useSelector(function (state) {
    return state.tickets
  })

  // If there are no tickets, add some simple sample tickets
  if (ticketsState.tickets.length === 0) {
    dispatch(addTicket(1, 'Login issue', 'Alice', 'open', 'Cannot log into the system'))
    dispatch(addTicket(2, 'Page not loading', 'Bob', 'in-progress', 'Dashboard page keeps loading'))
    dispatch(addTicket(3, 'Password reset', 'Charlie', 'closed', 'Requested password reset email'))
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Customer Support Dashboard</h1>
      <TicketList />
    </div>
  )
}

// 4. Wrap App with Provider so Redux store is available
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
