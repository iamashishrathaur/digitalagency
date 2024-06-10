import Navbar from './Navbar';
import logo from '../assets/images/logo.svg'
import { IoMenuOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const menuOpen =()=>{
    setIsActive(!isActive);
  }

  useEffect(()=>{
    isActive ? document.body.classList.toggle("active"): document.body.classList.remove("active")
  },[isActive])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">

        <a href="#" className="logo">
          <img src={logo} width="209" height="52" alt="dprod logo" />
        </a>
        <Navbar isActive={isActive} setIsActive={setIsActive}/>

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler onClick={()=>menuOpen()}>
          
        <IoMenuOutline aria-hidden='true' role='img' className='md hydrated' name='menu-outline' size={'20px'} display={'block'} strokeWidth={2} visibility={'inherit'}/>

        </button>

        <a href="#" className="btn btn-primary">Contact Us</a>

        <div className={`overlay ${isActive ? 'active' : ''}`} data-nav-toggler data-overlay onClick={() => setIsActive(false)}></div>

      </div>
    </header>
  );
}

export default Header;

