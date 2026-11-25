import { Courts } from './components/Courts/Courts';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Location } from './components/Location/Location';
import { Structure } from './components/Structure/Structure';

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Courts />
        <Structure />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;