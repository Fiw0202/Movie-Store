import './Content.css'
import Search from "../../../public/iCon/search.svg"
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

const API_Search ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/search/movie?api_key=5505336f9853474cebaa235d705afe22&query=&api_key=5505336f9853474cebaa235d705afe22"
const API_Key = "&api_key=5505336f9853474cebaa235d705afe22"
const API_Sort = "https://api.themoviedb.org/3/movie/popular?api_key=5505336f9853474cebaa235d705afe22&language=en-US&page=1"

function Content(){
        const [movie, setMovie] = useState([])
        const [url,setUrl]=useState(API_Sort)
        useEffect(() => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setMovie(data.results)
        })
    }, [url]);

    return(
            <div className='content'>
                <form className='searchBar'>
                    <input input type='text' placeholder='Search movie'/>
                    <button>
                        <img src={Search} alt='Search'/>
                        </button>
            </form>
            <div className='content-movie'>
                    {movie.map((res,pos) => {
                        return<Card info={res} key={pos}/> })
                    }
            </div>
            </div>
        )
}
export default Content