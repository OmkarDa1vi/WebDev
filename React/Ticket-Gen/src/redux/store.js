import { configureStore } from '@reduxjs/toolkit'

const initialTicketState = {
  tickets: [],
  selectedTicketId: null,
  searchText: '',
  statusFilter: 'all',
  loading: false,
  error: ''
}

const TICKET_ADD = 'ticket/add'
const TICKET_SELECT = 'ticket/select'
const TICKET_SET_SEARCH = 'ticket/setSearch'
const TICKET_SET_STATUS_FILTER = 'ticket/setStatusFilter'
const TICKET_SET_LOADING = 'ticket/setLoading'
const TICKET_SET_ERROR = 'ticket/setError'

function ticketReducer(state = initialTicketState, action) {
  switch (action.type) {
    case TICKET_ADD: {
      const newTicket = action.ticket
      return {
        ...state,
        tickets: [...state.tickets, newTicket]
      }
    }

    case TICKET_SELECT: {
      return {
        ...state,
        selectedTicketId: action.id
      }
    }

    case TICKET_SET_SEARCH: {
      return {
        ...state,
        searchText: action.text
      }
    }

    case TICKET_SET_STATUS_FILTER: {
      return {
        ...state,
        statusFilter: action.status
      }
    }

    case TICKET_SET_LOADING: {
      return {
        ...state,
        loading: action.value
      }
    }

    case TICKET_SET_ERROR: {
      return {
        ...state,
        error: action.message
      }
    }

    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    tickets: ticketReducer
  }
})

export function addTicket(id, subject, user, status, description) {
  return {
    type: TICKET_ADD,
    ticket: { id, subject, user, status, description }
  }
}

export function selectTicket(id) {
  return {
    type: TICKET_SELECT,
    id: id
  }
}

export function setSearchText(text) {
  return {
    type: TICKET_SET_SEARCH,
    text: text
  }
}

export function setStatusFilter(status) {
  return {
    type: TICKET_SET_STATUS_FILTER,
    status: status
  }
}

export function setLoading(value) {
  return {
    type: TICKET_SET_LOADING,
    value: value
  }
}

export function setError(message) {
  return {
    type: TICKET_SET_ERROR,
    message: message
  }
}
