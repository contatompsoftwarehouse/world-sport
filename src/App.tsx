import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
      </main>
    </>
  );
}

export default App;