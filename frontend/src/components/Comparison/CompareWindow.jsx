import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

export default class CompareWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 139,
        };
        this.windowToggle = this.windowToggle.bind(this);
    }
    static propTypes = {
        product1: PT.array.isRequired,
        product2: PT.array.isRequired,
        compareLink: PT.string.isRequired,
        crearFunc: PT.func.isRequired,
    };
    windowToggle = () => {
        this.state.height == 0
            ? this.setState({
                  height: 139,
              })
            : this.setState({
                  height: 0,
              });
    };
    render() {
        const { product1, product2, compareLink, crearFunc } = this.props;
        return (
            <div>
                <div className="comparison-window comparison-window__open">
                    <div
                        className="comparison-window__header"
                        onClick={this.windowToggle}
                    >
                        <span className="comparison-window__vs">vs</span>
                        <span className="comparison-window__title">
                            Список сравнения
                        </span>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 256 512"
                            color="white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                        </svg>
                    </div>
                    <div
                        className="comparison-window__body comparison-window__open"
                        style={{ height: `${this.state.height}px` }}
                    >
                        <ul>
                            <li>
                                <div className="comparison-window__image">
                                    <img
                                        src="https://via.placeholder.com/280x220/3C59fFC/FFFFFF/"
                                        alt={product1}
                                    />
                                </div>
                                <span className="comparison-window__name">
                                    {product1.length > 16
                                        ? product1.substring(0, 16 - 3) + '...'
                                        : product1}
                                </span>
                            </li>
                            <li>
                                <div className="comparison-window__image">
                                    <img
                                        src="https://via.placeholder.com/280x220/3C59fFC/FFFFFF/"
                                        alt={product1}
                                    />
                                </div>
                                <span className="comparison-window__name">
                                    {product2.length > 16
                                        ? product2.substring(0, 16 - 3) + '...'
                                        : product2}
                                </span>
                            </li>
                        </ul>
                        <div className="comparison-window__button-container">
                            <Link to={compareLink}>
                                <button className="comparison-window__compare-button">
                                    Сравнить
                                </button>
                            </Link>
                            <button
                                className="comparison-window__delete-button"
                                aria-label="Add another object"
                                onClick={crearFunc}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 448 512"
                                    color="white"
                                    size="12"
                                    height="12"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
