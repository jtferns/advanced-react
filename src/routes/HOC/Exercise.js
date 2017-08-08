import React from 'react';

const data = [
  {
    name: 'Jani Eväkallio',
    location: 'London'
  },
  {
    name: 'Ken Wheeler',
    location: 'Jersey',
  },
  {
    name: 'Nader Dabit',
    location: 'Mississippi'
  }
]

const API = {
  getData: () => new Promise(resolve => {
    return setTimeout(() => resolve(data), 2000)
  }),
}

/*
*  Update the withPeople HOC to fetch data from our fake API, then return the
*  Component with the data from the API passed down as props.
*  In App, map over the data and render it to the UI.
*/

const withPeople = (Component) => class extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    API
      .getData()
      .then((d) => this.setState(() => ({ data: d })))
  }
  render() {
    return <Component {...this.props} {...this.state} />
  }
}

const App = ({ data }) => <div>
  {
    data.length === 0 ? <p>Loading...</p> :
    data.map(({ name, location }, index) => {
      return <div key={index}>
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
    })
  }
</div>

export default withPeople(App);
