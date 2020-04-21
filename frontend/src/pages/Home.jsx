import React, { Component } from 'react';

import { Banner, CategoryBlock } from '../components';

export default class Home extends Component {
    render() {
        return (
            <>
                <Banner
                    title="VERSUS"
                    description={[
                        'Платформа для сравнения данных, охватывающая более 10 категорий.',
                        <br />,
                        'Сравните университеты, кафе, еду, телефоны и многое другое.',
                    ]}
                />
                <CategoryBlock />
            </>
        );
    }
}
