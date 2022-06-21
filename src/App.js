import Boost from './components/Boost';
import Footer from './components/Footer';
import Header from './components/Header';
import ShortenLink from './components/ShortenLink';
import Statistics from './components/Statistics';

function App() {
  return (
    <>
      <Header />
      <main className="mt-32">
        <ShortenLink />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default App;
