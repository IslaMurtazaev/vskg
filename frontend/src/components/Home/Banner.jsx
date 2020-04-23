import React, { Component } from 'react';
import PT from 'prop-types';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }
    static propTypes = {
        title: PT.oneOfType([
            PT.string,
            PT.object
        ]).isRequired,
        description: PT.oneOfType([
            PT.string,
            PT.object
        ]).isRequired
    };
    componentDidMount() {
        this.setState({ isLoading: false });
    }
    render() {
        const { title, description } = this.props;
        return (
            <div className="banner">
                <div className="banner__inner">
                    <div className="banner__bg">
                        <div className="banner__text container">
                            <div className="banner__text_body container">
                                <h1>{title}</h1>
                                <h2>{description}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
