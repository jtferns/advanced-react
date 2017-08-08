import React from 'react';

import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

// Can import this directly in React Native
// import { Animated } from 'react-native';

// react-native-animatable has pre-wrapped animatable components

/* Exercise:
*  Use interpolation to create an animated message that will show up after a
*  button is clicked. For example, maybe a button submits a form, and we can
*  show an animated message confirming the form input was submitted.
*/

// use this.animatedValue.setValue(0) to reset a value

const data = ['banana', 'pineapple', 'mango', 'kiwi'];

export default class AnimatedExample extends React.PureComponent {
  constructor() {
    super()
    this.state= {
      animated: false,
    }
    // this.animatedValues = [];
    // data.forEach((item) => {
    //   this.animatedValues[item] = new Animated.Value(0)
    // })
  }

  // animatedValue = new Animated.Value(0);
  // animatedMarginLeft = new Animated.Value(-430);
  // animatedOpacity = new Animated.Value(0);
  animatedMarginLeft = new Animated.Value(0);
  animatedOpacity = new Animated.Value(0);

  // componentDidMount() {
  //   this.animate()
  // }

  animate = () => {
    this.animatedMarginLeft.setValue(0);
    this.animatedOpacity.setValue(0);
    // const animations = data.map((item, index) => (
    //   Animated.timing(
    //     this.animatedValues[item],
    //     {
    //       toValue: 1,
    //       duration: 500,
    //       delay: index * 100
    //     }
    //   )
    // ));
    // Animated.parallel(animations
    Animated.parallel([
      Animated.timing(this.animatedMarginLeft, { toValue: 1, duration: 800, delay: 100, easing: Easing.bounce }),
      Animated.timing(this.animatedOpacity, { toValue: 1, duration: 800, delay: 100 })
    ]).start()
  }

  updateMargin = () => {
    Animated.timing(
      this.animatedValue,
      {
        duration: 1000,
        toValue: 1,
        easing: Easing.linear,
      }
    ).start(
      // this takes a callback!
      () => console.log('i did a thing')
    )
    // this.setState((state) => ({ animated: !state.animated }))
  }


  render() {
    // const animatedMarginLeft = this.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 300],
    // });
    // const fontSize = this.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [16, 32],
    // });
    // const backgroundColor = this.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['red', 'orange'],
    // });

    const animatedMarginLeft = this.animatedMarginLeft.interpolate({
      inputRange: [0, 1],
      outputRange: [250, 6],
    });

    return (
      <div>
        <button onClick={this.animate} style={styles.button}>Upvote!</button>
        <Animated.div style={{
          display: 'flex',
          flexDirection: 'column',
          width: 200,
          border: 'solid 1 gray',
          borderRadius: 4,
          backgroundColor: '#eee',
          marginTop: animatedMarginLeft,
          opacity: this.animatedOpacity,
          textAlign: 'center',
        }}>
          <p style={{ padding: 6 }}>⬆️</p>
        </Animated.div>
      </div>
    )
  }
}

// <Animated.div style={Object.assign({}, styles.box, { marginLeft: this.animatedMarginLeft })} />

// <p>Animated</p>
// <button onClick={this.updateMargin}>Animate!</button>
//
// <Animated.div style={Object.assign({}, styles.box, { marginLeft: animatedMarginLeft })} />
//
// <Animated.div style={{ fontSize }}>
//   Hello World!
// </Animated.div>
//
// <Animated.div style={Object.assign({}, styles.box, { backgroundColor })} />

// <Animated.div style={{ opacity: this.animatedOpacity }}>
//   <p style={styles.welcome}>Welcome</p>
// </Animated.div>
// <Animated.div style={{
//   display: 'flex', flexDirection: 'column', marginLeft: this.animatedMarginLeft, width: 400
// }}>
//   <input style={styles.input} />
//   <button style={styles.button}>Sign Up</button>
// </Animated.div>

// {
//   data.map((item, index) => {
//     <Animated.div style={Object.assign({}, styles.box, { opacity: this.animatedValues[item] })}>
//       { item }
//     </Animated.div>
//   })
// }

const styles = {
  box: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    transition: 'all .5s linear'
  },
  welcome: {
    fontSize: 25,
  },
  input: {
    margin: 10,
    backgroundColor: 'pink',
    fontSize: 22,
  },
  button: {
    backgroundColor: 'purple',
    border: 'none',
    outline: 'none',
    fontSize: 18,
    color: '#fff',
    padding: 6
  }
}
