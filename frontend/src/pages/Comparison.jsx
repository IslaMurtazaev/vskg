import React, { Component } from 'react';
import PT from 'prop-types';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import { CategoryBlock, CompareBanner, CompareTable } from '../components';

export default class Comparison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: {},
            fieldsHead: [],
            product1: [],
            product2: [],
            isLoading: true,
        };
        this.MergeRecursive = this.MergeRecursive.bind(this);
        this.myRef = React.createRef();
    }
    static propTypes = {
        match: PT.any.isRequired,
    };
    MergeRecursive(obj1, obj2) {
        for (var p in obj2) {
            try {
                obj2[p].constructor == Object
                    ? (obj1[p] = this.MergeRecursive(obj1[p], obj2[p]))
                    : (obj1[p] = obj2[p]);
            } catch (e) {
                obj1[p] = obj2[p];
            }
        }

        return obj1;
    }
    componentDidMount() {
        axios.get('/categories/').then(res => {
            let categoryId = this.props.match.params.category_id;
            let product1Id = this.props.match.params.item1_id;
            let product2Id = this.props.match.params.item2_id;

            let category = res.data.results.find(item => item.id == categoryId);

            const product1 = category.products.find(
                item => item.id == product1Id
            );
            const product2 = category.products.find(
                item => item.id == product2Id
            );
            const product1Fields = product1.fields.map(item => item.value);
            const product2Fields = product2.fields.map(item => item.value);
            const fieldsHead = product1.fields.map(item => item.name);

            let obj1 = fieldsHead.reduce(
                (acc, cur, i) => ({ ...acc, [i]: { id: i, field: cur } }),
                {}
            );
            let obj2 = product1Fields.reduce(
                (acc, cur, i) => ({ ...acc, [i]: { product1: cur } }),
                {}
            );
            let obj3 = product2Fields.reduce(
                (acc, cur, i) => ({ ...acc, [i]: { product2: cur } }),
                {}
            );
            let obj4 = this.MergeRecursive(obj1, obj2);
            let all = this.MergeRecursive(obj4, obj3);

            this.setState({
                all,
                fieldsHead,
                product1,
                product2,
                isLoading: false,
            });
            this.myRef.current.scrollTo(0, 0);
        });
    }

    render() {
        const { all, product1, product2, isLoading } = this.state;
        return (
            <div className="comparison" ref={this.myRef}>
                <div className="comparison__body">
                    <div className="container">
                        {!isLoading ? (
                            <CompareBanner
                                product1={product1}
                                product2={product2}
                            />
                        ) : (
                            <div className="comparison-banner">
                                <div>
                                    <div className="comparison-banner__titles">
                                        <div className="comparison-banner__title">
                                            <Skeleton width={480} height={44} />
                                        </div>
                                        <div className="comparison-banner__title">
                                            <Skeleton width={480} height={44} />
                                        </div>
                                    </div>
                                    <div className="comparison-banner__vs">
                                        <span>vs</span>
                                    </div>
                                    <div className="comparison-banner__images">
                                        <div className="comparison-banner__image">
                                            <div className="comparison-banner__image-wrapper">
                                                <Skeleton
                                                    width={280}
                                                    height={220}
                                                />
                                            </div>
                                        </div>
                                        <div className="comparison-banner__image">
                                            <div className="comparison-banner__image-wrapper">
                                                <Skeleton
                                                    width={280}
                                                    height={220}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="comparison-table">
                        <div className="container">
                            {!isLoading ? (
                                <CompareTable all={all} />
                            ) : (
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="text-right">
                                                <Skeleton width={320} />
                                            </td>
                                            <th className="text-center">
                                                <Skeleton width={120} />
                                            </th>
                                            <td className="text-left">
                                                <Skeleton width={320} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">
                                                <Skeleton width={320} />
                                            </td>
                                            <th className="text-center">
                                                <Skeleton width={120} />
                                            </th>
                                            <td className="text-left">
                                                <Skeleton width={320} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">
                                                <Skeleton width={320} />
                                            </td>
                                            <th className="text-center">
                                                <Skeleton width={120} />
                                            </th>
                                            <td className="text-left">
                                                <Skeleton width={320} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">
                                                <Skeleton width={320} />
                                            </td>
                                            <th className="text-center">
                                                <Skeleton width={120} />
                                            </th>
                                            <td className="text-left">
                                                <Skeleton width={320} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                    <CategoryBlock />
                </div>
            </div>
        );
    }
}
