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

    let newSearchHistory = [];
    if (makeSelection === false) {
      [...searchResults, ...previousResults].forEach((e, i) => {
        const isFirst = (i === 0);
        if (isFirst || e.title !== searchResults[0].title) {
          newSearchHistory.push(e);
        }
      });
    } else { newSearchHistory = [...previousResults]; }

    fetch(`/location/search/query/${searchTerm}`)
      .then(res => res.json())
      .then((d) => {
        this.setState({
          searchTerm: '',
          previousResults: newSearchHistory,
          noData: false,
          makeSelection: d.length > 1,
          searchResults: [d],
        });
      })
      .catch(() => {
        this.setState({
          searchResults: [],
          searchTerm: '',
          previousResults: newSearchHistory,
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
      <div className="root-wrapper">
        <div className="root-header">
          <h1>
            Weather Checker
          </h1>
        </div>
        <div className="root-search">
          <Search
            update={this.updateSearchTerm}
            initiate={this.fetchQuery}
            term={searchTerm}
          />
        </div>
        <div className="root-results">
          {noData
            ? <OopsMessage />
            : <ListFilter results={searchResults} select={makeSelection} choose={this.fetchId} />
          }
        </div>
        <div className="root-history">
          <SearchList results={previousResults} history />
        </div>
      </div>
    );
  }
}

export default Root;
