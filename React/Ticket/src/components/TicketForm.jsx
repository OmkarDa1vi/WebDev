import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../context/TicketContext";

export default function TicketForm() {
  const { addTicket } = useContext(TicketContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    priority: "Low",
    user: "Current User"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTicket(formData);
    navigate("/");
  };

  return (
    <div className="ticket-form" style={{ maxWidth: "500px", margin: "2rem auto", background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Create New Ticket</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
          Subject:
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
            style={{ padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
          Description:
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
            rows="4"
            style={{ padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
          Priority:
          <select 
            name="priority" 
            value={formData.priority} 
            onChange={handleChange}
            style={{ padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <button type="submit" className="btn-primary" style={{ marginTop: "10px" }}>Submit Ticket</button>
      </form>
    </div>
  );
}