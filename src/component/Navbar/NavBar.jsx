import './NavBar.css'
import SearchIcon from "../../../public/iCon/search.svg"

function Navbar(){
    return(
<div className='navbar'>
<h1>Movie Store</h1>
<button ><img src={SearchIcon} alt='Search'/></button>
</div>
    )
}
export default Navbar;