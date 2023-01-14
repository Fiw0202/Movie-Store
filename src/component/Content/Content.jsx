import './Content.css'
import Search from "../../../public/iCon/search.svg"

function Content(){

    return(
            <div className='content'>
                <form className='searchBar'>
                    <input input type='text' placeholder='Search movie'/>
                    <button>
                        <img src={Search} alt='Search'/>
                        </button>
            </form>
            </div>
        )
}
export default Content