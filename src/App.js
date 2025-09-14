import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import SubBody from './components/SubBody/SubBody';
function App() {
  return (
    <div className="App">


      <Header />
      <div className="Middle">
        <Body />
      </div>
      <div className="SubMiddle">
      <SubBody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
