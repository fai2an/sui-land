import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import AuthenticationPage from "./pages/Authentication.tsx"; // Import Authentication page
import Dashboard from "./pages/Dashboard.tsx"; // Import Dashboard page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  Welcome to Sui Land
                </h1>
                <AuthenticationPage />{" "}
                {/* This component will render on "/" route */}
              </div>
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
