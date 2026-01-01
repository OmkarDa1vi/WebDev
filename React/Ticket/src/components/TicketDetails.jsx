import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

export default function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tickets, deleteTicket, updateTicketStatus } = useContext(TicketContext);

  const ticket = tickets.find(t => t.id === parseInt(id));

  if (!ticket) return <h2>Ticket not found!</h2>;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      deleteTicket(ticket.id);
      navigate("/");
    }
  };

  return (
    <div className="details-container" style={{ background: "white", padding: "2rem", borderRadius: "8px", maxWidth: "600px", margin: "2rem auto", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button className="btn-secondary" onClick={() => navigate("/")}>← Back</button>
        <span className={`status-badge status-${ticket.status}`}>{ticket.status}</span>
      </div>

      <h1>{ticket.subject}</h1>
      
      <div style={{ margin: "1.5rem 0", color: "#555" }}>
        <p><strong>Submitted by:</strong> {ticket.user}</p>
        <p><strong>Priority:</strong> <span style={{ fontWeight: "bold", color: ticket.priority === "High" ? "red" : "black" }}>{ticket.priority}</span></p>
      </div>

      <div style={{ background: "#f8f9fa", padding: "1rem", borderRadius: "5px", border: "1px solid #e9ecef" }}>
        <h3>Description</h3>
        <p>{ticket.description}</p>
      </div>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", borderTop: "1px solid #eee", paddingTop: "1rem" }}>
        <button 
          className={ticket.status === "Open" ? "btn-success" : "btn-warning"} 
          onClick={() => updateTicketStatus(ticket.id, ticket.status)}
        >
          {ticket.status === "Open" ? "Mark as Resolved" : "Re-open Ticket"}
        </button>

        <button className="btn-danger" onClick={handleDelete}>
          Delete Ticket
        </button>
      </div>
    </div>
  );
}