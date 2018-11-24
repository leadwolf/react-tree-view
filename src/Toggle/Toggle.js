import PropTypes from 'prop-types';
import React from 'react';
import { VelocityComponent } from 'velocity-react';

import { Add } from '../icons/Add';
import { Remove } from '../icons/Remove';

const Toggle = ({ className, style, expanded, getAnimation, getDuration, iconSize }) => {
    return (
        <div
            className={`rtv-toggle ${className}`}
            style={{
                height: `${iconSize}px`,
                width: `${iconSize}px`,
                ...style,
            }}
        >
            <VelocityComponent animation={getAnimation(expanded)} duration={getDuration(expanded)}>
                {expanded ? <Remove iconSize={iconSize} /> : <Add iconSize={iconSize} />}
            </VelocityComponent>
        </div>
    );
};

Toggle.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    expanded: PropTypes.bool,
    getAnimation: PropTypes.func,
    getDuration: PropTypes.func,
    iconSize: PropTypes.number,
};

Toggle.defaultProps = {
    className: '',
    style: undefined,
    expanded: false,
    getAnimation: expanded => ({
        rotateZ: expanded ? 180 : -180,
    }),
    getDuration: expanded => 200,
    iconSize: 24,
};

export { Toggle };
