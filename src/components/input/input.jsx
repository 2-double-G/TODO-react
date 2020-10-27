import React from 'react';
import PropTypes from 'prop-types';

import './input.css'

const Input = ({ value, onChange, onKeyPress }) => (
    <div className="input-wrapper">
        <div className="plus-button">
            <i className="fas fa-plus"></i>
        </div>
        <input
            type="text"
            className="input"
            placeholder="What needs to be done?"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    </div>
);

Input.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}
  
Input.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
}

export default Input;