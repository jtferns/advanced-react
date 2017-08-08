import React from 'react';

/* Exercise:
*  Create an animated input that expands when focused and
*  contracts when unfocused.
*  Hint: use onmouseenter and onmouseleave
*/

export default class CSSAnimations extends React.PureComponent {
  state = {
    animated: false,
    focused: false,
  }
  animate = () => {
    this.setState((state) => ({
      animated: !state.animated,
    }))
  }
  onFocus = () => {
    this.setState(() => ({ focused: true }))
  }
  onBlur = () => {
    this.setState(() => ({ focused: false }))
  }
  render() {
    return (
      <div>
        <p>CSSAnimations</p>
        <input
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className={['fancy-input', this.state.focused && 'fancy-input-focused'].join(' ')}
          placeholder="Stretch Me!"
        />
        <br/>
        <button
          onClick={this.animate}
        >Animate</button>
        <div className={['box', this.state.animated && 'box-animated'].join(' ')} />
      </div>
    )
  }
}
