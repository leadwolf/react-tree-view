import PropTypes from 'prop-types';
import React from 'react';

import { Add } from '../icons/Add';
import { Remove } from '../icons/Remove';

const Toggle = ({ className, style, expanded }) => {
    return (
        <div className={`rtv-toggle ${className}`} style={style}>
            {expanded ? <Remove /> : <Add />}
        </div>
    );
};

Toggle.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    expanded: PropTypes.bool,
};

Toggle.defaultProps = {
    className: '',
    style: undefined,
    expanded: false,
};

export { Toggle };
