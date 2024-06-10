const Navbar = ({isActive ,setIsActive}) => {
  return (
    <nav className={isActive ? "navbar active" : 'navbar'} data-navbar>
      <ul className="navbar-list">
        <li><a href="#home" className="navbar-link" data-nav-link onClick={()=>setIsActive(false)}>Home</a></li>
        <li><a href="#services" className="navbar-link" data-nav-link onClick={()=>setIsActive(false)}>Services</a></li>
        <li><a href="#about" className="navbar-link" data-nav-link onClick={()=>setIsActive(false)}>About</a></li>
        <li><a href="#projects" className="navbar-link" data-nav-link onClick={()=>setIsActive(false)}>Projects</a></li>
        <li><a href="#blog" className="navbar-link" data-nav-link onClick={()=>setIsActive(false)}>Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
