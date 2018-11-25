import PropTypes from 'prop-types';
import React from 'react';
import { VelocityComponent } from 'velocity-react';

import { animations } from '../animations';
import { Add } from '../icons/Add';
import { Remove } from '../icons/Remove';

const Toggle = ({ className, style, expanded, getAnimation, iconSize }) => (
    <div
        className={`rtv-toggle ${className}`}
        style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
            ...style,
        }}
    >
        <VelocityComponent {...getAnimation(expanded)}>
            {expanded ? <Remove iconSize={iconSize} /> : <Add iconSize={iconSize} />}
        </VelocityComponent>
    </div>
);

Toggle.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    expanded: PropTypes.bool,
    getAnimation: PropTypes.func,
    iconSize: PropTypes.number,
};

Toggle.defaultProps = {
    className: '',
    style: undefined,
    expanded: false,
    getAnimation: animations.toggle,
    iconSize: 24,
};

export { Toggle };
