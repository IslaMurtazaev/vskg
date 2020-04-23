import React, { Component } from 'react';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Banner, ProductsList } from '../components';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    componentDidMount() {
        let url = this.props.match.params.category_id;
        axios.get('/categories/').then(res => {
            let category = res.data.results;
            const products = category.find(item => String(item.id) === url);
            this.setState({ title: products.name });
        });
    }
    render() {
        const { title } = this.state;
        return (
            <>
                {title ? (
                    <Banner
                        title={title}
                        description={`Выберите ${title.toLowerCase()} для сравнения.`}
                    />
                ) : (
                    <Banner
                        title={
                            <SkeletonTheme color="#aebfff33" highlightColor="#94abff33">
                                <Skeleton height={32} width={320} />
                            </SkeletonTheme>
                        }
                        description={
                            <SkeletonTheme color="#aebfff33" highlightColor="#94abff33">
                                <Skeleton height={32} width={460} />
                            </SkeletonTheme>
                        }
                    />
                )}
                <ProductsList />
            </>
        );
    }
}
