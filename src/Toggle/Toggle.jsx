import PropTypes from 'prop-types';
import React from 'react';
import { VelocityComponent } from 'velocity-react';

import { Add } from '../icons/Add';
import { Remove } from '../icons/Remove';

const Toggle = ({ className, style, expanded, getAnimation, getDuration }) => {
    return (
        <div className={`rtv-toggle ${className}`} style={style}>
            <VelocityComponent animation={getAnimation(expanded)} duration={getDuration(expanded)}>
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
    getDuration: PropTypes.func,
};

Toggle.defaultProps = {
    className: '',
    style: undefined,
    expanded: false,
    getAnimation: expanded => ({
        rotateZ: expanded ? 180 : 360,
    }),
    getDuration: expanded => (expanded ? 100 : 250),
};

export { Toggle };
