import React from 'react';
import PropTypes from 'prop-types';


import './title.css'

const Title = ({ title }) => (
    <div>
        <h1 className="title">{title}</h1>
    </div>
);

Title.propTypes = {
    title: PropTypes.string,
}
  
Title.defaultProps = {
    title: 'Title',
}
  
export default Title;