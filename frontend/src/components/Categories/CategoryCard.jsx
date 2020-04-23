import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

export default class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }
    static propTypes = {
        id: PT.number.isRequired,
        title: PT.string.isRequired,
        img: PT.string.isRequired,
    };
    render() {
        const { id, title, img } = this.props;
        const disabled = id !== 1;
        return (
                <Link to={!disabled && `/category/${id}`}>
                    <div
                        className={`category__card ${disabled ? "grayscale" : ""}`}
                        style={{backgroundImage: `url(${img})`}}
                        title={disabled && "В процессе разработки 👷 "}
                    >
                        <div className="category__card-body">
                            <div className="category__card-title">
                                <h1>{title}</h1>
                            </div>
                        </div>
                    </div>
                </Link>
        );
    }
}
