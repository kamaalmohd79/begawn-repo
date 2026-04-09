import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
 
    </>
  );
}

export default App;
