import logo from './logo.svg';

const Navbar = () => {
  
  return ( 
    <nav className="navbar">
      <h1>Store</h1>
      <div className="links">
        <a className='home-link' href="/">Home</a>
        <a className='home-link' href="/items">All Items</a>
      </div>
    </nav>
  );
}

 
export default Navbar;