import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import QuestionCard from "./components/questions/QuestionCard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<QuestionCard />} />
        <Route path="/question" element={<QuestionCard />} />
      </Routes>
    </Layout>
  );
}
export default App;
