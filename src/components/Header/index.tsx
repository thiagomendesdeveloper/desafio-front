import React from 'react'
//import Navigation from '../Nav/index'
import logo from '../../assets/images/logo-apiki.webp'
import { Wrapper, Content } from '../Header/style'

const Header = () => {    
  
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="" />
          {/* <Navigation menu={menu.menuItems.nodes} />  */}
      </Content>
    </Wrapper>
      
  );
}
  
export default Header;
  