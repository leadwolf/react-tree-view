import { PropTypes } from 'prop-types';
import React from 'react';

const Add = ({ iconSize }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
);

Add.propTypes = {
    iconSize: PropTypes.number,
};

Add.defaultProps = {
    iconSize: 24,
};

export { Add };
