import React from 'react'
import logo from '../../assets/images/logo-apiki.webp'
import { Wrapper, Content } from '../Header/style'

const Header = () => {    
  
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="" />
      </Content>
    </Wrapper>
      
  );
}
  
export default Header;
  