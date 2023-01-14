import './NavBar.css'
import BasketIcon from "../../../public/iCon/basket.svg"

function Navbar(){
    return(
<div className='navbar'>
<h1>Movie Store</h1>
<button ><img src={BasketIcon} alt='Basket'/></button>
</div>
    )
}
export default Navbar;