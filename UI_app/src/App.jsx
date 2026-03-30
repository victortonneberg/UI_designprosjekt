import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} />  ikke det vi skal ha */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}
export default App
