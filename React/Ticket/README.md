# Customer Support Ticket Dashboard

This project is a functional frontend application built with React. It simulates a customer support ticketing system where users can view, filter, create, and manage support tickets.

I built this project to practice managing global state in a React application without relying on complex external libraries. It focuses heavily on the Context API for state management and uses LocalStorage to mimic a persistent database.

## Features

* **Ticket Management**: Users can create new tickets and view a comprehensive list of existing ones.
* **Search and Filter**: The dashboard includes real-time filtering by status (Open/Resolved) and a text search for ticket subjects.
* **Status Updates**: Tickets can be marked as "Resolved" or reopened directly from the details view.
* **Deletion**: Functionality to permanently remove tickets from the system.
* **Data Persistence**: The app syncs with the browser's LocalStorage, ensuring data is not lost when the page is refreshed.
* **Responsive Layout**: The interface uses CSS Grid and Flexbox to adapt to different screen sizes.

## Tech Stack

* **React (Vite)**: Used for the core component architecture and fast build times.
* **Context API**: Handles global state management (tickets, loading states, and user actions).
* **React Router**: Manages navigation between the Dashboard, Ticket Creation, and Details views.
* **CSS**: Custom styling used throughout to maintain full control over the visual hierarchy.

## Project Architecture

The code is structured to separate logic from the view layer:

* **src/context**: This contains `TicketContext.jsx`, which acts as the "brain" of the application. It handles all data logic (fetching, adding, deleting, updating) and exposes these functions to the components.
* **src/components**: Contains the presentational components like `Dashboard`, `TicketCard`, and `TicketDetails`. These components focus on rendering the UI and rely on the Context for data.
* **public/tickets.json**: Serves as the initial mock database. When the app loads for the first time, it fetches data from here if no local data is found.

## **Project Flow**
The application is designed around a central dashboard that branches out into specific tasks.

**Initialization:** When the app loads, it initializes the internal state. It checks if any data exists in the browser's LocalStorage. If not, it fetches a default set of dummy tickets from a local JSON file to populate the view.

**Dashboard View:** The user is presented with a grid of current tickets. From here, they can filter tickets by status (Open/Resolved) or search for specific keywords in the subject line.

**Ticket Details:** Clicking on a specific ticket navigates the user to a detailed view. Here, the user can read the full description, toggle the status between Open and Resolved, or permanently delete the ticket.

**Ticket Creation:** Users can navigate to a form to submit a new ticket. Upon submission, the new ticket is added to the global state, saved to storage, and the user is redirected back to the main dashboard.

## **Technical Implementation**
Here is a breakdown of how specific functionalities were engineered within the application.

**1. State Management (Context API)**
Instead of passing data down through multiple layers of components (prop-drilling), I used the React Context API. The TicketContext serves as the "single source of truth" for the application.

Why it was used: This allows the Dashboard, Ticket Details, and Create Ticket forms to all access and modify the same list of tickets without complex connections between them.

How it works: The TicketProvider component wraps the entire application. It holds the tickets array in its state and exposes functions like addTicket, deleteTicket, and updateTicketStatus to any component that needs them.

**2. Data Persistence (LocalStorage Strategy)**
Since this is a purely frontend project without a real backend database, I implemented a synchronization strategy with the browser's LocalStorage to prevent data loss on refresh.

The Logic: I used useEffect hooks in the Context provider.

On Mount: The app first tries to parse localStorage.getItem("tickets"). If that returns null, it falls back to fetching tickets.json.

On Update: Whenever the tickets state changes (a ticket is added, edited, or deleted), a second useEffect triggers and saves the new array string back to LocalStorage.

**3. Search and Filtering**
The filtering logic handles data processing on the client side to ensure the UI remains responsive.

Implementation: I utilized the Javascript .filter() method directly within the Dashboard component. The application checks two conditions for every ticket:

Does the ticket status match the selected filter (or is "All" selected)?

Does the ticket subject include the text typed in the search bar?

Only tickets that satisfy both conditions are rendered to the grid.

**4. Navigation and Routing**
The application uses react-router-dom to handle navigation without reloading the page (Single Page Application behavior).

Dynamic Routing: The details page uses a dynamic URL parameter (e.g., /ticket/1). The TicketDetails component extracts this ID from the URL using the useParams hook, converts it to a number, and searches the global state for the matching ticket.

## **Project Limitations**

**Frontend Only**: There is no server-side logic (Node.js/Python) or physical database (SQL/NoSQL) connected to this project.

## Future Improvements

If I were to expand this project, I would consider adding:

* **Form Validation**: improved error handling to ensure users provide valid inputs.
* **Pagination**: To handle performance if the ticket list grows into the hundreds.
* **Dark Mode**: Leveraging the existing Context architecture to manage a visual theme toggle.
