import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__body container">
                    <div className="footer-left">
                        <div className="logo">
                            <NavLink to="/">
                                <img
                                    src={logo}
                                    alt="Versus Logo"
                                    className="logo__img"
                                />
                            </NavLink>
                        </div>
                        <p>
                            Версус - это платформа для сравнения данных,
                            охватывающая более 10 категорий. Сравните
                            университеты, кафе, еду, телефоны и многое другое.
                        </p>
                    </div>
                    <div className="footer-right"></div>
                </div>
            </div>
        );
    }
}
