
import NavBar from "./components/navBar";
import ProductDisplay from "./components/productDisplay";
import Footer from './components/footer';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from "./components/productScreen";


function App() {
  return (
    <BrowserRouter>
        <div className="App grid-container">
          <NavBar/>
          <main className='main'>
          <Route path='/products/:id' component={ProductScreen}></Route>
            <Route path='/' component={ProductDisplay} exact/>
          </main>
          <Footer className='footer'/>
      </div>
    </BrowserRouter>

  );
}

export default App;
