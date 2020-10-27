import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../components/item/item';

import './list.css';

const List = ({ tasksList }) => (
    <ul className="list">
        {tasksList.map(({ id, text, done }) => (
            <Item key={id} text={text} done={done} />
        ))}
    </ul>
);

List.propTypes = {
    tasksList: PropTypes.array,
}
  
List.defaultProps = {
    tasksList: [],
}
  
export default List;