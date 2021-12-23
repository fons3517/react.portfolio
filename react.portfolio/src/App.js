import React from 'react';
import Home from './components/Home';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <NavTabs />

      <Container>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
