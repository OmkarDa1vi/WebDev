import { Link } from "react-router-dom";

export default function TicketCard({ ticket }) {
  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      <h3>{ticket.subject}</h3>
      
      <div className="meta-data">
        <span className={`status-badge status-${ticket.status}`}>
          {ticket.status}
        </span>
        <span style={{ color: '#888' }}>{ticket.priority} Priority</span>
      </div>

      <Link to={`/ticket/${ticket.id}`} style={{ textDecoration: 'none' }}>
        <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
          View Details
        </button>
      </Link>
    </div>
  );
}