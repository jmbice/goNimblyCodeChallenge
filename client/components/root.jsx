import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
      currentId: null,
      currentWeather: [],
      previousWearther: [],
    };
  }

  render() {
    return (
      <div>
        Hello again
      </div>
    );
  }
}

export default Root;
