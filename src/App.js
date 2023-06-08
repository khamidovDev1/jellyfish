import style from './App.module.scss';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Main2 from './components/Main2/Main2';
import Service from './components/Service_main/Service';
import Sitebar from './components/SiteBar/Sitebar';

function App() {
  return (
    <div className="App">
      <Sitebar />
      <Main />
      <Main2 />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
