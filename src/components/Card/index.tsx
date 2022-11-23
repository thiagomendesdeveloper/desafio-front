import { Article } from '../Card/style'
import { useFetch } from '../../hooks/useFetch'

export default function Card(){
  
  const {data} = useFetch('https://blog.apiki.com/wp-json/wp/v2/posts/?per_page=10')
  console.log(data)
    return(
      <div>
        {/* {data?.map( (e:any) => {
          // console.log(e)
            return(
              <Article>
                <h3>teste</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet provident deserunt eligendi mollitia.</p>
              </Article>
            )
          })
        } */}
      </div>
    )
}