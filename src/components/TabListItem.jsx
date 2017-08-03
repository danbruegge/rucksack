import React from 'react';
import PropTypes from 'prop-types';

const TabListItem = ({ uid, url, title }) => (
    <li>
        <b>{uid}</b> - <a href={url}>{title}</a>
    </li>
);

TabListItem.propTypes = {
    uid: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TabListItem;
