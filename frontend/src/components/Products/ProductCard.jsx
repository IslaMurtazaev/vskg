import React, { Component } from 'react';
import PT from 'prop-types';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

export default class ProductCard extends Component {
    static propTypes = {
        title: PT.string.isRequired,
        img: PT.string.isRequired,
    };
    render() {
        const { title, img } = this.props;
        return (
            <div className="product__card">
                <div className="product__card-header">
                    <img src={img} alt="img" />
                    <div className="overlay-block"></div>
                </div>
                <div className="product__card-body">
                    <div className="product__card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="product__card-progress">
                        <div className="product__card-progress-item">
                            <p>Field 1</p>
                            <ProgressBar
                                percent={35}
                                filledBackground="linear-gradient(298deg, #7600e0, #3c59fc)"
                            />
                        </div>
                        <div className="product__card-progress-item">
                            <p>Field 1</p>
                            <ProgressBar
                                percent={75}
                                filledBackground="linear-gradient(298deg, #7600e0, #3c59fc)"
                            />
                        </div>
                        <div className="product__card-progress-item">
                            <p>Field 1</p>
                            <ProgressBar
                                percent={55}
                                filledBackground="linear-gradient(298deg, #7600e0, #3c59fc)"
                            />
                        </div>
                        <div className="product__card-progress-item">
                            <p>Field 1</p>
                            <ProgressBar
                                percent={85}
                                filledBackground="linear-gradient(298deg, #7600e0, #3c59fc)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
