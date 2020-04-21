import React, { Component } from 'react';

import { Banner, CategoryList } from '../components';

export default class Categories extends Component {
    render() {
        return (
            <>
                <Banner
                    title="Категории"
                    description="Выберите категорию для сравнения."
                />
                <CategoryList />
            </>
        );
    }
}
