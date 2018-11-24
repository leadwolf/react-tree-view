import './container.scss';

import { PropTypes } from 'prop-types';
import React from 'react';

import { Header } from '../Header';
import { nodePropType } from '../proptypes';
import { Toggle } from '../Toggle';

const Container = ({ className, style, expanded, node, onClick }) => {
    const hasChildren = !!node.children && !!node.children.length;

    return (
        <div className={`rtv-container ${className}`} style={style} onClick={() => onClick(node)}>
            {hasChildren && <Toggle expanded={expanded} />}
            <Header node={node} />
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    expanded: PropTypes.bool,
    node: nodePropType,
    onClick: PropTypes.func,
};

Container.defaultProps = {
    className: '',
    style: undefined,
    expanded: false,
    node: { name: '' },
    onClick: undefined,
};

export { Container };
