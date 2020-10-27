import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../components/item/item';

import './list.css';

const List = ({ tasksList, deleteToDo, completeToDo }) => (
    <ul className="list">
        {tasksList.map(({ id, text, done }) => (
            <Item completeToDo={completeToDo} deleteToDo={deleteToDo} id={id} key={id} text={text} done={done} />
        ))}
    </ul>
);

List.propTypes = {
    tasksList: PropTypes.array,
    deleteToDo: PropTypes.func,
    completeToDo: PropTypes.func
}
  
List.defaultProps = {
    tasksList: [],
    deleteToDo: () => {},
    completeToDo: () => {}
}
  
export default List;