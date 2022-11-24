import { Article } from '../Card/style'
import { useFetch } from '../../hooks/useFetch'
import { Wrapper } from "./style"
import { Link } from 'react-router-dom';

export default function Card(){
  
  function removeTags(str:string):boolean|string {
    if ((str===null) || (str===''))
      return false;
    else
      str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
  }

  function dateFormat(date:string):string {
    const today = new Date(date);
    const yyyy = today.getFullYear();
    let mm:string|number = today.getMonth() + 1; // Months start at 0!
    let dd:string|number = today.getDate();
    let hh:string|number = today.getHours();
    let m:string|number = today.getMinutes();
    let ss:string|number = today.getSeconds();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (m <  10)  m = '0' + m;
    if (ss < 10) ss = '0' + ss;

    const date_formated = dd + '/' + mm + '/' + yyyy + ' às ' + hh + ':' + m + ':' + ss;

    return date_formated;
  }



  

  const {data} = useFetch('https://blog.apiki.com/wp-json/wp/v2/posts/?per_page=10')
  //console.log(data)
    return(
      <Wrapper>
        { data.map((e:any, index:number) => {
          // console.log(e)
          return (
            <Article key={index}>
              <h3>{e.title.rendered}</h3>
              <time>Postado em: {dateFormat(e.date)}</time>
              <p>{removeTags(e.excerpt.rendered)}</p>
              <Link to={`/post/${e.id}`}>Saiba mais</Link>
            </Article>
          )})
        }
      </Wrapper>
    )
}