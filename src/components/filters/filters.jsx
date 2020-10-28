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

const Filter = ({ count, active, changeFilter }) => (
    <div className="count">
        <span className="item-left">{count <= 1 ? `${count} item left` : `${count} items left` }</span>
        <div>
            {BTNS.map(({ id, value }) => (
                <button
                    onClick={() => {changeFilter(id)}}
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
    changeFilter: PropTypes.func
}
  
Filter.defaultProps = {
    count: 0,
    active: 'all',
    changeFilter: () => {}
}

export default Filter;