import Header from './components/Header';
import Footer from './components/Footer';  
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">  
        <Container>
          <h1>Welcome To My Store</h1>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
