// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <Header />
      {/* <header className="text-white py-1 fixed-top">
        <div className="container">
        <img src="images/rickdeakinslogo.svg" alt="logo" style={{ maxWidth: '20%' }} /> 
        </div> */}
        {/* <Nav /> */}
      {/* </header>    */}
      <main>
        <Outlet />
        <Footer />
      </main>

    </div>
  );
}

export default App; 