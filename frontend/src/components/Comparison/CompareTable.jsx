import React, { Component } from 'react';
import PT from 'prop-types';

export default class CompareTable extends Component {
    static propTypes = {
        all: PT.object.isRequired,
    };
    render() {
        const { all } = this.props;
        return (
            <table>
                <tbody>
                    {Object.keys(all).map((item, idx) => (
                        <tr key={idx}>
                            <td className="text-right">{all[item].product1}</td>
                            <th className="text-center">
                                {all[item].field.toString().toUpperCase()}
                            </th>
                            <td className="text-left">{all[item].product2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
