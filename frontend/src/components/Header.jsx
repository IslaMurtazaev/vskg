import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-body container">
                    <div className="logo">
                        <NavLink to="/">
                            <img
                                src={logo}
                                alt="Versus Logo"
                                className="logo__img"
                            />
                        </NavLink>
                    </div>
                    <div className="navbar">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <NavLink
                                    to="/categories"
                                    activeClassName="navbar__item_active"
                                >
                                    Категории
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
