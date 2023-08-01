import logo from './img/logo.jpg'
import basket from './img/basket.svg'

import st from './header.module.sass'
import { Link } from 'react-router-dom';
import Search from '../UI/input/Search';


const Header = () => {
    return (
        <div className={st.header__wrapper}>
            <div className={st.logo_block}>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                <div>
                    <h1>REACT PIZZA</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
                <Search />
            </div>

            <div className={st.basket_case}>
                <span> 20 $</span>
                <p> | </p>
                <Link to='/basket'><img src={basket} alt="basket" /></Link>
            </div>
        </div>
    );
}

export default Header;