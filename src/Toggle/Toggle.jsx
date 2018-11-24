import PropTypes from 'prop-types';
import React from 'react';

const Toggle = ({ className, style, expanded }) => {
    return (
        <div className={`rtv-toggle ${className}`} style={style}>
            {expanded}
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
