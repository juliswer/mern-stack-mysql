import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import TasksFormPage from "./pages/TasksFormPage";
import TasksPage from "./pages/TasksPage";
import Navbar from "./components/NavbarComponent";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
