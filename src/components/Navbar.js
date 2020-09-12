import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menu from "./svg/bars-solid.svg";
import cart from "./svg/shopping-cart-solid.svg";
import close from "./svg/times-solid.svg";


class Navbar extends Component {
    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        const { toggle } = this.state
        return (
            <div className="navbar">
                <div className="menu" onClick={this.menuToggle}>
                    <img src={menu} width="20" alt="" />
                </div>
                <div className="logo">
                    <h1><Link to="/logo">Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about" >About</Link></li>
                        <li><Link to="product">Product</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                        <li><Link to='/login'>Login/Register</Link></li>
                        <li className="close" onClick={this.menuToggle}><img src={close} width="20" alt="" /></li>
                    </ul>
                    <div className="cart">
                        <span>0</span>
                        <Link to="/cart">
                            <img src={cart} width="20" alt="" />
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;