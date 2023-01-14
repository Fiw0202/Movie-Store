import './Content.css'

function Content(){

    return(
            <div className='content'>
                <form className='searchBar'>
                    <input input type='text' placeholder='Search movie'/>
                    <button>
                        <img src='../../../public/iCon/search.svg'/>
                        </button>
            </form>
            </div>
        )
}
export default Content