import { PropTypes } from 'prop-types';
import React from 'react';

const Remove = ({ iconSize }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox={`0 0 ${iconSize} ${iconSize}`}
    >
        <path d="M19 13H5v-2h14v2z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
);

Remove.propTypes = {
    iconSize: PropTypes.number,
};

Remove.defaultProps = {
    iconSize: 24,
};

export { Remove };
