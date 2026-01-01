import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TicketContext } from "../context/TicketContext";
import TicketCard from "./TicketCard";

export default function Dashboard() {
  const { tickets, loading, error, filterStatus, setFilterStatus } = useContext(TicketContext);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <h2>Loading tickets...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === "All" || ticket.status === filterStatus;
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Support Tickets</h1>
        <Link to="/create">
          <button className="btn-primary">+ New Ticket</button>
        </Link>
      </div>

      <div className="controls">
        <input 
          type="text" 
          placeholder="Search tickets..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="ticket-list">
        {filteredTickets.length > 0 ? (
          filteredTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <p>No tickets found.</p>
        )}
      </div>
    </div>
  );
}