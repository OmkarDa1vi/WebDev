import { Routes, Route } from "react-router-dom";
import { TicketProvider } from "./context/TicketContext";
import Dashboard from "./components/Dashboard";
import TicketDetails from "./components/TicketDetails";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <TicketProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket/:id" element={<TicketDetails />} />
          <Route path="/create" element={<TicketForm />} />
        </Routes>
      </div>
    </TicketProvider>
  );
}

export default App;