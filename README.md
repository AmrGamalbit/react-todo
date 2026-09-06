# React ToDo

A React application for creating and tracking your daily tasks.
In this app, you can create and manage projects, add tasks to projects, and assign due dates and priority to them, and filter todos by today.

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS

## Features

- **Full CRUD Functionality:** Easily add, edit, and delete your tasks or projects.
- **Local Storage Persistence:** Your todos are automatically saved locally so you won't lose them when you refresh or close the browser.
- **Due Dates:** Assign specific deadlines to your tasks to keep your schedule on track.
- **Priority:** Assign priority to your tasks.
- **Today Filter:** Filter todos by today to see only today's tasks.

## Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd react-todo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the app.

## Project Structure

```text
src/
├── components/     # Reusable UI components
├── hooks/          # Custom hooks (useCollection, useLocalStorage)
├── constants.js    # App-wide constants
├── App.jsx         # Main app layout and state
└── main.jsx        # Application entry point
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
