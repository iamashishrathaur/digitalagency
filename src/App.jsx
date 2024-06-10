import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <article>
          <Hero />
          <Services />
          <About />
          <Projects />
          <Blog />
        </article>        
      </main>
      <Footer />
    </div>
  );
};

export default App;
