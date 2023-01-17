import React, {useState, useEffect} from 'react';
import { animateScroll as scroll} from 'react-scroll';
import{FaBars} from 'react-icons/fa'
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  const [scrollNav, setscrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setscrollNav(true)
    } else {
      setscrollNav(false)
    }
  }; 

  const toggleHome = () => {
     scroll.scrollToTop();
  } // to scroll to top on clicking Paisa


  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <>

    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome }> {/*to is used as an alternative for a href */}
          Paisa
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about' 
            smooth={true} duration={500} spy={true} exact='true' offset={-80} 
            >About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='discover'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='services'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='signup'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
    
    </>
  );
};

export default Navbar;