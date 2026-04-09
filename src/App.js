import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import 'react-multi-carousel/lib/styles.css';
import Layout from './layout';
import { FaWhatsapp } from "react-icons/fa";   // ✅ add this

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Layout>
      </Router>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/917986228254"   // your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </>
  );
}

export default App;