import React, { Component } from 'react';
import PT from 'prop-types';

export default class CompareBanner extends Component {
    static propTypes = {
        product1: PT.any.isRequired,
        product2: PT.any.isRequired,
    };
    render() {
        const { product1, product2 } = this.props;
        return (
            <div className="comparison-banner">
                <div>
                    <div className="comparison-banner__titles">
                        <div className="comparison-banner__title">
                            <p>{product1.name}</p>
                        </div>
                        <div className="comparison-banner__title">
                            <p>{product2.name}</p>
                        </div>
                    </div>
                    <div className="comparison-banner__vs">
                        <span>vs</span>
                    </div>
                    <div className="comparison-banner__images">
                        <div className="comparison-banner__image">
                            <div className="comparison-banner__image-wrapper">
                                <img
                                    src={product1.photo_url}
                                    alt="product 1"
                                />
                            </div>
                        </div>
                        <div className="comparison-banner__image">
                            <div className="comparison-banner__image-wrapper">
                                <img
                                    src={product2.photo_url}
                                    alt="product 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
