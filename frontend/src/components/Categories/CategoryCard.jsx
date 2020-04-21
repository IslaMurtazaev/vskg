import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

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
        return (
                <Link to={`/category/${id}`}>
                    <div
                        className="category__card"
                        style={{
                            backgroundImage: `url(${img})`,
                        }}
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
