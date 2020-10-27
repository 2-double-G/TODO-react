import React from 'react';
import PropTypes from 'prop-types';

import './filters.css';

const BTNS = [
    {
        id: 'all',
        value: 'All'
    },
    {
        id: 'active',
        value: 'Active'
    },
    {
        id: 'completed',
        value: 'Completed'
    }
];

const Filter = ({ count, active }) => (
    <div className="count">
        <span className="item-left">{count <= 1 ? `${count} item left` : `${count} items left` }</span>
        <div>
            {BTNS.map(({ id, value }) => (
                <button
                    key={id}
                    className={id === active ? "filter --on" : 'filter'}>{value}</button>
            ))}
        </div>          
        <div className="clear">
            <i className="fas fa-sync-alt"></i>
        </div>
    </div>
);


Filter.propTypes = {
    count: PropTypes.number,
    active: PropTypes.string,
}
  
Filter.defaultProps = {
    count: 0,
    active: 'all',
}

export default Filter;