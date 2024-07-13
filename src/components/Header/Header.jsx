import "./Header.css"
import logoicon from "../../assets/icons/logo-icons.png"
import PersonIcon from "@mui/icons-material/Person"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"


function Header() { 
    const {getTotalItems} = useCartContext()


    return( 
    <header className='HeaderContainer'>
        <div className='HeaderTitle'>
            <img className='imageheader' src={logoicon} alt="logo icon" />
            <h1>Destiny</h1>
        </div>
        <nav className="HeaderNavigation">

            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Contact</Link>
        </nav>
        <div className='HeaderIconsLinks'>
           <Link to={"/"}><PersonIcon /></Link>
           <Link to={"/"}><SearchIcon /></Link>
           <Link to={"/"}><FavoriteBorderIcon /></Link>
           <Link to={"/cart"}>
             <ShoppingCartIcon />
             <span className="CartIconItemCount">{getTotalItems()}</span>
           </Link>
        </div>
    </header>
    )
}

export default Header;
