import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url:string){
    
    const [ data, setData ] = useState<any>([])

    useEffect( () => {
        // axios({
        //     method: 'get',
        //     url: url,
        //     timeout: 10000,
        //     responseType: 'stream'
        //   })
        // .then(function (response) {
        //     setData(response.data)
        // }).catch( error => {
        //     setData({
        //         error: true,
        //         message: "Erro ao carregar filmes por favor tente novamente mais tarde"
        //     })
        // })
        fetch(url)
        .then( (response:any) => response.json() )
        .then( (data:any) => {
            setData(data)
        
    })
    },[url])
  
    return { data }

}