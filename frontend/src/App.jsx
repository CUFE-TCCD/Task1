import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Event, Home, Locations, Signin, Signup, Statistics, Users } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/admin/statistics" element={<Statistics />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/locations" element={<Locations />} />
        <Route path="/admin/events" element={<Event />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
