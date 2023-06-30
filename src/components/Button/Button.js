import React from 'react'
import PropTypes from 'prop-types';

export default function Button(props) {

  return (
    <button className={props.className} onClick={() => props.onClick()}>{props.text}</button>
  )
}


Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "Button",
  onClick: () => console.log("Button clicked")
};

