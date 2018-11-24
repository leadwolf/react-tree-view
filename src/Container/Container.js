import './container.scss';

import { PropTypes } from 'prop-types';
import React from 'react';

import { Header } from '../Header';
import { decoratorsPropType, nodePropType } from '../proptypes';
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
    isSelected,
    decorators,
}) => {
    const hasChildren = !!node.children && !!node.children.length;
    const { Toggle: ToggleDecorator, Header: HeaderDecorator } = decorators;

    return (
        <div
            className={`rtv-container ${className} ${isSelected ? 'selected' : ''}`}
            style={{
                paddingLeft: `${depth * iconSize + (depth ? headerMarginLeft : 0)}px`,
                ...style,
            }}
            onClick={() => onClick(node)}
        >
            {hasChildren && (
                <ToggleDecorator expanded={expanded} iconSize={iconSize} decorators={decorators} />
            )}
            <HeaderDecorator
                node={node}
                style={{
                    marginLeft: `${hasChildren ? headerMarginLeft : 4}px`, // align it with the icon's padding
                }}
                decorators={decorators}
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
    isSelected: PropTypes.bool,
    decorators: decoratorsPropType.isRequired,
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
    isSelected: false,
    decorators: {
        Toggle,
        Header,
    },
};

export { Container };
