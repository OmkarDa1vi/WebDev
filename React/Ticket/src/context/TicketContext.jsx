import { createContext, useState, useEffect } from "react";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  // 1. LOAD DATA (Check LocalStorage, else fetch JSON)
  useEffect(() => {
    const loadTickets = async () => {
      try {
        const savedTickets = localStorage.getItem("tickets");
        if (savedTickets) {
          setTickets(JSON.parse(savedTickets));
          setLoading(false);
        } else {
          const response = await fetch("/tickets.json");
          if (!response.ok) throw new Error("Failed to fetch tickets");
          const data = await response.json();
          setTickets(data);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadTickets();
  }, []);

  // 2. SAVE DATA (Sync to LocalStorage on change)
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("tickets", JSON.stringify(tickets));
    }
  }, [tickets, loading]);

  // ACTIONS
  const addTicket = (newTicket) => {
    const ticketWithId = { ...newTicket, id: Date.now(), status: "Open" };
    setTickets((prev) => [...prev, ticketWithId]);
  };

  const deleteTicket = (id) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTicketStatus = (id, currentStatus) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: currentStatus === "Open" ? "Resolved" : "Open" }
          : t
      )
    );
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        loading,
        error,
        filterStatus,
        setFilterStatus,
        addTicket,
        deleteTicket,
        updateTicketStatus,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};