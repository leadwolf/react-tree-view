import PropTypes from 'prop-types';
import React from 'react';
import { VelocityComponent } from 'velocity-react';

import { Add } from '../icons/Add';
import { Remove } from '../icons/Remove';

const Toggle = ({ className, style, expanded, getAnimation, duration }) => {
    return (
        <div className={`rtv-toggle ${className}`} style={style}>
            <VelocityComponent animation={getAnimation(expanded)} duration={duration}>
                {expanded ? <Remove /> : <Add />}
            </VelocityComponent>
        </div>
    );
};

Toggle.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    expanded: PropTypes.bool,
    getAnimation: PropTypes.func,
    duration: PropTypes.number,
};

Toggle.defaultProps = {
    className: '',
    style: undefined,
    expanded: false,
    getAnimation: expanded => ({
        rotateZ: expanded ? 180 : 360,
    }),
    duration: 100,
};

export { Toggle };
