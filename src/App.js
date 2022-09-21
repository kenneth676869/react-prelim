
import './App.css';
import './index.css';
import  Navbar from './Navbar';
import Home from './pages/Home';
import Items from './pages/Items';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/items":
      component = <Items />
      break;
    }
  
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
