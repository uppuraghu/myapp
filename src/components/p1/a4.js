import React, { Component } from 'react';

class Appaa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    // Fetch data from an API
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error }));
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  handleClick = () => {
    console.log("Button clicked");
  }

  render() {
    const { data, error } = this.state;
    return (
      <div>
        <h1>Data from API:</h1>
        {error ? (
          <p>Error fetching data: {error.message}</p>
        ) : data ? (
          <ul>
            {data.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default Appaa;
