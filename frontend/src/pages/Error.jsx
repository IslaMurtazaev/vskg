import React, { Component } from 'react';

import { Banner, CategoryBlock } from '../components';

export default class Error extends Component {
    render() {
        return (
            <>
                <Banner
                    title="404"
                    description="Вернитесь на главную страницу."
                />
                <CategoryBlock />
            </>
        );
    }
}
