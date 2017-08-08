import React from 'react'

const Greeting = () =>
  <p>Hello World!</p>

// const greetingWithFunc = (func) => (Component) => (props) => {
//   func();
//   return <Component {...props} />;
// }

// rewrite and return a Class
const greetingWithFunc = (func) => (Component) => {
  return class extends React.Component {
    render() {
      func();
      return <Component {...this.props} />;
    }
  }
}

const log = () => console.log('hello from higher order component');

const BasicHOC = greetingWithFunc(log)(Greeting)

export default BasicHOC;
