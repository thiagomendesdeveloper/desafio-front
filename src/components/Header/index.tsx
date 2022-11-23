import React from 'react'
<<<<<<< HEAD
//import { Link } from 'gatsby'
//import Navigation from '../Nav/index'
//import Logo from '../../images/logo.svg'
//import { useMenuQuery } from '../../hooks/useMenuQuery'
=======
//import Navigation from '../Nav/index'
import logo from '../../assets/images/logo-apiki.webp'
>>>>>>> a7d9b68e754948d65a7067a6f7700ad9524d8e38
import { Wrapper, Content } from '../Header/style'

const Header = () => {    
  
  return (
    <Wrapper>
      <Content>
<<<<<<< HEAD
          <a href="/">
              {/* <img src={Logo} alt={site.siteMetadata.title} /> */}
          </a>
=======
        <img src={logo} alt="" />
>>>>>>> a7d9b68e754948d65a7067a6f7700ad9524d8e38
          {/* <Navigation menu={menu.menuItems.nodes} />  */}
      </Content>
    </Wrapper>
      
  );
}
  
export default Header;
  