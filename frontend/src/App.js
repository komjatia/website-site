import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./app.css";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomePage}></Route>
        </Container>
      </main>
    </Router>
  );
}

export default App;
