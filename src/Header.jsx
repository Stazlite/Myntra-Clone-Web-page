import "./App.css";
const Header=()=>{
    return(
        <div className="header">
        <div className="left">
            <img src="LOGO.png"/>
            </div>
        <div className="center">
            <ul className="nav-links">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder="search.."/>
            <button>search</button>
        </div>
        <div className="right">
        <div className="sign">
            sign in/sign up
        </div>
        <div className="cart">
            <button>cart</button>
        </div>
        </div>
        </div>
        )
    }
export default Header;