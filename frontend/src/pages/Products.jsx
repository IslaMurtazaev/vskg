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
            const products = category.find(item => item.id == url);
            this.setState({ title: products.name });
        });
    }
    render() {
        const { title } = this.state;
        return (
            <>
                {title.toString().toLowerCase() ? (
                    <Banner
                        title={title}
                        description={`Выберите ${title
                            .toString()
                            .toLowerCase()} для сравнения.`}
                    />
                ) : (
                    <Banner
                        title={
                            <SkeletonTheme
                                color="#aebfff"
                                highlightColor="#94abff"
                            >
                                <Skeleton height={32} width={320} />
                            </SkeletonTheme>
                        }
                        description={
                            <SkeletonTheme
                                color="#aebfff"
                                highlightColor="#94abff"
                            >
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
