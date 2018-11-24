import PropTypes from 'prop-types';
import React from 'react';

import { nodePropType } from '../proptypes';

const Header = ({ className, style, node }) => {
    return (
        <div className={`rtv-header ${className}`} style={style}>
            {node.name}
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    node: nodePropType,
};

Header.defaultProps = {
    node: { name: '' },
};

export { Header };
