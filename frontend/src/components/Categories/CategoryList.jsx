import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import { CategoryCard } from '../index';

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { category: [], isLoading: true };
    }

    componentDidMount() {
        axios.get('/categories/').then(res => {
            console.log(res);
            const category = res.data.results;
            this.setState({ category, isLoading: false });
        });
    }

    render() {
        const { category, isLoading } = this.state;
        return (
            <div className="category">
                <div className="category__body container">
                    <div className="category__list">
                        {!isLoading ? (
                            category
                                .map(category => (
                                    <CategoryCard
                                        key={category.id}
                                        id={category.id}
                                        title={category.name}
                                        category={category.name}
                                        img="https://via.placeholder.com/280x480/3C59fFC/FFFFFF/"
                                    />
                                ))
                                .sort()
                        ) : (
                                <Skeleton count={4} width={280} height={480} />
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CategoryList);
