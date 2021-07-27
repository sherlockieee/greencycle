
import NavBar from "./components/navBar";
import ProductDisplay from "./components/productDisplay";
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div className="App grid-container">
      <NavBar className='navbar'/>
      <ProductDisplay className='main'/>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
