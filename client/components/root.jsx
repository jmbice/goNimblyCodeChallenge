import React from 'react';
import SearchList from './SearchList';
import ListFilter from './ListFilter';
import Search from './Search';
import OopsMessage from './OopsMessage';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuery = this.fetchQuery.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.fetchId = this.fetchId.bind(this);
    this.state = {
      searchTerm: '',
      searchResults: [],
      previousResults: [],
      noData: false,
      makeSelection: false,
    };
  }

  fetchQuery() {
    const {
      searchTerm, previousResults, searchResults, makeSelection,
    } = this.state;
    if (searchTerm.length === 0) { return; }
    const history = makeSelection === false
      ? [...searchResults, ...previousResults]
      : [...previousResults];

    fetch(`/location/search/query/${searchTerm}`)
      .then(res => res.json())
      .then((d) => {
        this.setState({
          searchTerm: '',
          previousResults: history,
          noData: false,
          makeSelection: d.length > 1,
          searchResults: [d],
        });
      })
      .catch(() => {
        this.setState({
          searchResults: [],
          searchTerm: '',
          previousResults: history,
          noData: true,
        });
      });
  }

  fetchId(e) {
    fetch(`/location/search/id/${e.target.value}`)
      .then(res => res.json())
      .then((d) => {
        this.setState({
          searchTerm: '',
          noData: false,
          makeSelection: false,
          searchResults: [d],
        });
      })
      .catch(() => {
        this.setState({
          searchResults: [],
          searchTerm: '',
          makeSelection: false,
          noData: true,
        });
      });
  }

  updateSearchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const {
      searchResults, previousResults, searchTerm, noData, makeSelection,
    } = this.state;

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
          {noData
            ? <OopsMessage />
            : <ListFilter results={searchResults} select={makeSelection} choose={this.fetchId} />
          }
        </div>
        <div>
          <SearchList results={previousResults} />
        </div>
      </div>
    );
  }
}

export default Root;
