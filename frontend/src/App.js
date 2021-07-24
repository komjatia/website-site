import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container></Container>
      </main>
    </Router>
  );
}

export default App;
