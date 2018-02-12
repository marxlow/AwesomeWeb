//@flow
import React, { Component } from 'react';
import SingleGraph from '../Graph/SingleGraph';
import './table.css';

class GraphTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { marketDatas } = this.props;
        return (
            <div className="container">
                {marketDatas && marketDatas.map(marketData => {
                    return (
                        <span className="graph">
                            <SingleGraph
                                data={marketData}
                            />
                        </span>
                    )
                })}
            </div>
        );
    }
}

export default GraphTable