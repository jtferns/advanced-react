import React from 'react';
import PropTypes from 'prop-types';

/* Exercise:
*  Create a container component that receives an onClick function as a prop,
*  and passes the function down two levels to a button
*  eg.:
*  <Container onClick={someFunction}>
*    // Child components //
*  </Container>
*/

// NOTE: React Context is a powerful tool, but should be used safely.
// Great for one-time definition in app lifetime (e.g., localization).
// Consider all context properties as immutable.
// react-broadcast might be the better library for complex context sharing needs.
// Formidable youtube has a 5 minute segment on react-broadcast

// class Container extends React.Component {
//   static childContextTypes = {
//     onClick: PropTypes.func,
//   };
//   getChildContext() {
//     return {
//       onClick: this.onClick,
//     };
//   }
//   onClick = () => console.log('onClick called!')
//   render() {
//     return this.props.children;
//   }
// }
//
// const Component1 = () => (
//   <Container>
//     <Component2/ >
//   </Container>
// )
//
// const Component2 = (props, context) => (
//   <button onClick={context.onClick}>Click Me</button>
// )
//
// Component2.contextTypes = {
//   onClick: PropTypes.func,
// };
//
// export default class Context extends React.Component {
//   render() {
//     return <Component1/ >;
//   }
// }


export default class Context extends React.Component {
  // set childContextTypes in parent
  static childContextTypes = {
    name: PropTypes.string,
    occupation: PropTypes.string,
    onClick: PropTypes.func,
  }
  // call getChildContext in parent
  getChildContext() {
    return {
      name: 'Some Random Guy',
      occupation: '🍌',
      onClick: this.ohMyClick,
    }
  }
  logFormData = (formData) => {
    console.log('formData:', formData)
  }
  ohMyClick = ({ target: { name } }) => {
    alert(`I was clicked by... ${name}!`);
  }
  render() {
    return (
      <div>
        <p style={styles.title}>Context</p>
        <Child1 />
      </div>
    )
  }
}

class Child1 extends React.Component {
  render() {
    return (
      <Child2 />
    )
  }
}

const Child2 = (props, context) => (
  <div style={styles.child2}>
    <p>Child2</p>
    <p>Name: {context.name}</p>
    <p>Occupation: {context.occupation}</p>
    <button name="a smooth button" onClick={context.onClick}>Click Me!</button>
  </div>
)
Child2.contextTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  onClick: PropTypes.func,
}

const styles = {
  title: {
    fontSize: 34,
    padding: 25,
    margin: 0,
  },
  child2: {
    margin: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#cacaca'
  }
}
