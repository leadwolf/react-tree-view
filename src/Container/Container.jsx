import './container.scss';

import { PropTypes } from 'prop-types';
import React from 'react';

import { Header } from '../Header';
import { nodePropType } from '../proptypes';
import { Toggle } from '../Toggle';

const Container = ({
    className,
    style,
    expanded,
    node,
    onClick,
    iconSize,
    headerMarginLeft,
    depth,
}) => {
    const hasChildren = !!node.children && !!node.children.length;

    return (
        <div
            className={`rtv-container ${className}`}
            style={{
                paddingLeft: `${depth * iconSize + headerMarginLeft}px`,
                ...style,
            }}
            onClick={() => onClick(node)}
        >
            {hasChildren && <Toggle expanded={expanded} iconSize={iconSize} />}
            <Header
                node={node}
                style={{
                    marginLeft: `${headerMarginLeft}px`,
                }}
            />
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    expanded: PropTypes.bool,
    node: nodePropType,
    onClick: PropTypes.func,
    depth: PropTypes.number,
    iconSize: PropTypes.number,
    headerMarginLeft: PropTypes.number,
};

Container.defaultProps = {
    className: '',
    style: undefined,
    expanded: false,
    node: { name: '' },
    onClick: undefined,
    depth: 0,
    iconSize: 24,
    headerMarginLeft: 10,
};

export { Container };
