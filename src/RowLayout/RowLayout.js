import './rowLayout.scss';

import PropTypes from 'prop-types';
import React from 'react';

const RowLayout = ({ className, style, children }) => (
    <div className={`rtv-row-layout ${className}`} style={style}>
        {children}
    </div>
);

RowLayout.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

RowLayout.defaultProps = {
    className: '',
    style: undefined,
    children: null,
};

export { RowLayout };
