import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const SinglePage = () => {

    const { id } = useParams<any>()
    
    const {data} = useFetch(`https://blog.apiki.com/wp-json/wp/v2/posts/${id}`)

    return(
        <>
            <Header />
            <h2>{data.id}</h2>
            <Footer />
            
        </>
    )

}

export default SinglePage;