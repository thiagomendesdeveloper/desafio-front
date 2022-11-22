import React, { useState } from "react"
import Header from '../components/Header/index'
import Nav from '../components/Nav/index'
import Card from '../components/Card/index'
import Footer from '../components/Footer/index'
import { GlobalStyles, Primary } from "./global.styles"

const Layout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            <GlobalStyles />
            <Header />
            <Nav />
            <Card />
            <Primary></Primary>
            <Footer />

            
        </>
    )
}

export default Layout