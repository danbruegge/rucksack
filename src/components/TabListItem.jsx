import React from 'react';
import PropTypes from 'prop-types';

const TabListItem = ({ url, title }) => (
    <li>
        <a href={url}>{title}</a>
    </li>
);

TabListItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TabListItem;
