import React from 'react'

// const override = (overrideProps) => (Component) => (props) =>
//   <Component {...props} {...overrideProps} />

// rewrite override using a React class
const override = (overrideProps) => (Component) => {
  return class extends React.Component {
    render() {
      return <Component {...this.props} {...overrideProps} />
    }
  }
}

const User = ({ name, city }) => <p>{name}, {city}</p>

const AlwaysKen = override({ name: 'Ken', city: 'Hoboken' })(User)

export default () => (
  <div>
    <User name='Nader' city='Seattle' />
    <AlwaysKen name='Nader' city='Seattle' />
  </div>
)
