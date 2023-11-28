import './App.css';

import Header from './components/Header';
import News from './components/News';
import About from './components/About';
import Clients from './components/Clients';
import Hero from './components/Hero';
import TrendingStyles from './components/TrendingStyles';
import SecondHero from './components/SecondHero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero  /> 
      <About/>
      <TrendingStyles />
      <Clients/>
      <News/>
      <SecondHero/>
      <Gallery/>
      <Contact/>
     <Footer/>
   </div>
  );
}

export default App;
