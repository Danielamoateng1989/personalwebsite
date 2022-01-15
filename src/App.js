import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Navbar from './components/Navbar';
import Homepage from './pages/Home';
import Submenu from './components/Submenu';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact'
import Thankyou from './components/Thankyou'


import Form from './components/Form'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sendmessage" element={<Form />} />
          <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Footer />
      <Submenu />
    </Router>
  );
}

export default App;
