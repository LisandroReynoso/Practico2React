import "./Header.css"
import logoicon from "../../assets/icons/logo-icons.png"
import PersonIcon from "@mui/icons-material/Person"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"


function Header() { 
    return( 
    <header className='HeaderContainer'>
        <div className='HeaderTitle'>
            <img className='imageheader' src={logoicon} alt="logo icon" />
            <h1>Destiny</h1>
        </div>
        <nav>

            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
        <div className='HeaderIconsLinks'>
           <a href=""><PersonIcon /></a>
           <a href=""><SearchIcon /></a>
           <a href=""><FavoriteBorderIcon /></a>
           <a href=""><ShoppingCartIcon /></a>
        </div>
    </header>
    )
}

export default Header;
