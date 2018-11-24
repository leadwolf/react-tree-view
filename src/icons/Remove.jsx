import { PropTypes } from 'prop-types';
import React from 'react';

const Remove = ({ width, height }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path d="M19 13H5v-2h14v2z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
);

Remove.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

Remove.defaultProps = {
    width: 24,
    height: 24,
};

export { Remove };
