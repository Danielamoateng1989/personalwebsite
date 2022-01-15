import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Navbar from './Navbar';
import Homepage from '../pages/Home';
import Submenu from './Submenu';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Aboutme from './Aboutme'
import Thankyou from './Thankyou'


import Form from './Form'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/contact" element={<Aboutme />} />
          <Route path="/sendmessage" element={<Form />} />
          <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Footer />
      <Submenu />
    </Router>
  );
}

export default App;
