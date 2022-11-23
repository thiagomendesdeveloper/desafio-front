import React from 'react'
//import { Link } from 'gatsby'
//import Navigation from '../Nav/index'
//import Logo from '../../images/logo.svg'
//import { useMenuQuery } from '../../hooks/useMenuQuery'
import { Wrapper, Content } from '../Header/style'

const Header = () => {
    
  //const { site, menu } = useMenuQuery()
  
  return (
    <Wrapper>
      <Content>
          <a href="/">
              {/* <img src={Logo} alt={site.siteMetadata.title} /> */}
          </a>
          {/* <Navigation menu={menu.menuItems.nodes} />  */}
      </Content>
    </Wrapper>
      
  );
}
  
export default Header;
  