import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import 'react-multi-carousel/lib/styles.css';
import Layout from './layout';

// ❌ REMOVE THIS
// import { FloatingWhatsApp } from 'react-floating-whatsapp'

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
        href="https://wa.me/+917986228254"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-2 w-[120px] h-[120px]"
        aria-label="Contact us on WhatsApp"
      >
        <DotLottieReact
          src="https://lottie.host/1d874b54-94c0-4d37-84f7-2e6b05738f06/JNtywP0p8R.lottie"
          loop
          autoplay
        />
      </a>
    </>
  );
}

export default App;
