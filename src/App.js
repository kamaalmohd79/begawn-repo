import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import 'react-multi-carousel/lib/styles.css';
import Layout from './layout';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { FaWhatsapp } from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* Add other routes here */}
          </Routes>
        </Layout>
      </Router>
      {/* <FloatingWhatsApp
        phoneNumber="+917986228254"
        accountName={`Begawn`} */}
      {/* /> */}
      <a
        href="https://wa.me/+917986228254" // WhatsApp international URL format
        target="_blank"
        rel="noopener noreferrer"
        className="fixed  bottom-6 left-6 w-[160px] h-160px"
        aria-label="Contact us on WhatsApp"
      >
        <DotLottieReact
          src="https://lottie.host/1d874b54-94c0-4d37-84f7-2e6b05738f06/JNtywP0p8R.lottie"
          loop
          autoplay
        />
      </a>

      <TawkMessengerReact
        propertyId="62f25dc754f06e12d88db945"
        widgetId="1ga1bslpq"
      />
    </>

  );
}

export default App;
