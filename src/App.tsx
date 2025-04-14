import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
