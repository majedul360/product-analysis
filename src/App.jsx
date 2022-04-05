import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";
import Dashboard from "./components/dashboard/Dashboard";
import Blogs from "./components/blogs/Blogs";
import About from "./components/about/About";
import Notfound from "./components/notFound/NotFound";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="sections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
