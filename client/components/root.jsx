import React from 'react';
import SearchList from './SearchList';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.searchQuery = this.searchQuery.bind(this);
    this.state = {
      searchTerm: 'London',
      searchResults: [],
      currentId: null,
      currentWeather: [],
      previousWearther: [],
    };
  }

  componentDidMount() {
    this.searchQuery();
  }

  searchQuery() {
    const { searchTerm } = this.state;
    fetch(`/location/search/query/${searchTerm}`)
      .then(res => res.json())
      .then((d) => {
        this.setState({
          searchResults: [d],
        });
      });
  }


  render() {
    const { searchResults } = this.state;

    console.log(searchResults);

    return (
      <div>
        <SearchList searchResults={searchResults} />
      </div>
    );
  }
}

export default Root;
