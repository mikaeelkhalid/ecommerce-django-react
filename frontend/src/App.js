import { Container } from 'react-bootstrap';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
