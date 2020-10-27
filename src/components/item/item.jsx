import React from 'react';
import propTypes from 'prop-types';

import './item.css';

const Item = ({ text, done }) => (
    <li className="item">
        <i className={done ? "far fa-check-circle" : "far fa-circle"}></i>
        <p className={done ? "text done" : "text"}>{text}</p>
        <i className="fas fa-times"></i> 
    </li>
);

Item.propTypes = {
    text: propTypes.string,
    done: propTypes.bool
}
Item.defaultProp = {
    text: "",
    done: false
}

export default Item;