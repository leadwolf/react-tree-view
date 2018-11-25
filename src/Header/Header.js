import './header.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ className, style, children }) => (
    <div className={`rtv-header ${className}`} style={style}>
        {children}
    </div>
);

Header.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

Header.defaultProps = {
    className: '',
    style: undefined,
    children: null,
};

export { Header };
