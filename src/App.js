import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import 'react-multi-carousel/lib/styles.css';
import Layout from './layout';




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
        accountName={`Begawn`}
         /> */}
      {/* <FloatingWhatsApp
        phoneNumber="+917986228254"
        accountName={`Begawn`} */}
      {/*= /> */}
      {/* <a
        href="https://wa.me/+917986228254" // WhatsApp international URL format
        target="_blank"
        rel="noopener noreferrer"
        className="fixed  bottom-6 right-2 w-[120px] h-120px"
        aria-label="Contact us on WhatsApp"
      >
        <FloatingWhatsApp
        phoneNumber="+917986228254"
        accountName={`Begawn`}
         />
        
      </a> */}

      {/* <TawkMessengerReact
        propertyId="62f25dc754f06e12d88db945"
        widgetId="1ga1bslpq"
      /> */}
    </>

  );
}

export default App;
