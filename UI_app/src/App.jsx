import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionCard from "./components/questions/QuestionCard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<QuestionCard />} />  
      </Routes>
    </Layout>
  );
}
export default App;
