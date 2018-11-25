import './tree.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Tree = ({ className, style, children }) => (
    <div className={`rtv-tree ${className}`} style={style}>
        {children}
    </div>
);

Tree.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

Tree.defaultProps = {
    className: '',
    style: undefined,
    children: null,
};

export { Tree };
