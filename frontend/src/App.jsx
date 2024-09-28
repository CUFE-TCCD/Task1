import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Event, Events, FAQs, Home, Locations, Profile, Signin, Signup, Sponsors, Statistics, Users } from "./pages";

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
        <Route path="/sponsors" element={<Sponsors/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/profile" element={<Profile/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
