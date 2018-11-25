import './cell.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Cell = ({ className, style, children }) => (
    <div className={`rtv-cell ${className}`} style={style}>
        {children}
    </div>
);

Cell.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

Cell.defaultProps = {
    className: '',
    style: undefined,
    children: null,
};

export { Cell };
