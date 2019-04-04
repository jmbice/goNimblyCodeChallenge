import React from 'react';
import SearchList from './SearchList';
import Search from './Search';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuery = this.fetchQuery.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.state = {
      searchTerm: '',
      searchResults: [],
      currentId: null,
      currentWeather: [],
      previousWearther: [],
    };
  }

  componentDidMount() {
    this.fetchQuery();
  }

  fetchQuery(e) {
    const { searchTerm } = this.state;
    if (searchTerm.length === 0) { return; }

    fetch(`/location/search/query/${searchTerm}`)
      .then(res => res.json())
      .then((d) => {
        this.setState({
          searchResults: [d],
          searchTerm: '',
        });
      });
  }

  updateSearchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { searchResults, searchTerm } = this.state;

    return (
      <div>
        <div>
          <Search
            update={this.updateSearchTerm}
            initiate={this.fetchQuery}
            term={searchTerm}
          />
        </div>
        <div>
          <SearchList searchResults={searchResults} />
        </div>
      </div>
    );
  }
}

export default Root;
