import React from 'react';
import PropTypes from 'prop-types';

import { TabListItem } from 'app/components';

const TabList = ({ listId, tabs, onClick }) => (
    <div>
        <ul>
            {tabs.map(itemProps => (
                <TabListItem key={itemProps.id} {...itemProps} />
            ))}
        </ul>
        <button onClick={onClick}>
            Open list #{listId}
        </button>
    </div>
);

TabList.propTypes = {
    listId: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
    })).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TabList;
