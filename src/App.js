import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import Homepage from './Homepage';
import 'react-multi-carousel/lib/styles.css';
import Layout from './layout';



import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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

      {/* ✅ ONLY ONE WHATSAPP BUTTON */}
  <a
  href="https://wa.me/917986228254"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 w-[20px] h-[20px] bg-green-500 rounded-full flex items-center justify-center shadow-lg"
>
  <FaWhatsapp className="text-white text-3xl" />
</a>
    </>
  );
}

export default App;
