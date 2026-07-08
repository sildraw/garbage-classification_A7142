import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Knowledge from "@/pages/Knowledge";
import Quiz from "@/pages/Quiz";
import Research from "@/pages/Research";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/research" element={<Research />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
