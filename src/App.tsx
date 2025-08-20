
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import AboutPage from "./components/pages/About";
import Faculty from "./components/pages/Faculty";
import Courses from "./components/pages/Courses";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
