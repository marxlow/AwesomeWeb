// @flow
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from '../components/Search/Search';
import Table from '../components/Table/Table';
import GraphTable from '../components/Table/GraphTable';
import moment from 'moment-timezone';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const sampleData = [
  { price: 100, timestamp: moment().subtract(1, 'day') }, // Most recent
  { price: 90, timestamp: moment().subtract(2, 'day') },
  { price: 80, timestamp: moment().subtract(3, 'day') },
  { price: 70, timestamp: moment().subtract(4, 'day') }
];

const sampleDataArr = [ sampleData, sampleData, sampleData, sampleData, sampleData ];

class App extends Component {
  constructor (props) {
    super(props); // Sets this.props in the constructor else it would be undefined

    this.state = {
      list,
      searchTerm: ''
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss (id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

  render () {
    const { searchTerm, list } = this.state;
    return (
      <div className='page'>
        <div className='interactions'>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Search
          </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
        <GraphTable
          marketDatas={sampleDataArr}
        />
      </div>
    );
  }
}

export default App;
