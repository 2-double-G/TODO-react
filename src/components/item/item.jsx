import React from 'react';
import propTypes from 'prop-types';

import './item.css';

const Item = ({ text, done, deleteToDo, id, completeToDo }) => (
    <li className="item">
        <i onClick={() => completeToDo(id)} className={done ? "far fa-check-circle" : "far fa-circle"}></i>
        <p className={done ? "text done" : "text"}>{text}</p>
        <i onClick={() => deleteToDo(id)} className="fas fa-times"></i> 
    </li>
);

Item.propTypes = {
    text: propTypes.string,
    done: propTypes.bool,
    deleteToDo: propTypes.func,
    id: propTypes.number,
}
Item.defaultProp = {
    text: "",
    done: false,
    deleteToDo: () => {},
    id: 0,
}

export default Item;