import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import { CategoryCard } from '../index';

class CategoryBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { category: [], isLoading: true };
    }

    componentDidMount() {
        axios.get('/categories/').then(res => {
            const category = res.data.results;
            this.setState({ category, isLoading: false });
        });
    }

    render() {
        const { category, isLoading } = this.state;
        return (
            <div className="category">
                <div className="category__body container">
                    <div className="section-title">
                        <p>лучшие категории</p>
                        <h2>
                            <Link to="/categories">Категории</Link>
                        </h2>
                    </div>
                    <div className="category__list">
                        {!isLoading ? (
                            category
                                .slice(0, 4)
                                .map(category => (
                                    <CategoryCard
                                        key={category.id}
                                        id={category.id}
                                        title={category.name}
                                        category={category.name}
                                        img={category.photo_url}
                                    />
                                ))
                        ) : (
                            <Skeleton count={4} width={280} height={480} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CategoryBlock);
