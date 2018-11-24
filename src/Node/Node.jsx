import './node.scss';

import { PropTypes } from 'prop-types';
import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import { Container } from '../Container';
import { nodePropType } from '../proptypes';

const getAnimation = node => ({
    enter: {
        animation: 'slideDown',
        duration: 300,
    },
    leave: {
        animation: 'slideUp',
        duration: 300,
    },
});

const Node = ({ className, style, expandedNodeIds, node, onClick }) => {
    const isExpanded = expandedNodeIds.includes(node.id);
    const hasChildren = !!node.children;
    const showChildren = hasChildren && isExpanded;

    return (
        <div className={`rtv-node ${className}`} style={style}>
            <Container expanded={isExpanded} node={node} onClick={onClick} />
            <VelocityTransitionGroup {...getAnimation(node)}>
                {showChildren && (
                    <div className="rtv-node-children">
                        {node.children.map(child => (
                            <Node
                                key={child.id}
                                className={className}
                                style={style}
                                expandedNodeIds={expandedNodeIds}
                                node={child}
                                onClick={onClick}
                            />
                        ))}
                    </div>
                )}
            </VelocityTransitionGroup>
        </div>
    );
};

Node.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    node: nodePropType,
    onClick: PropTypes.func,
    expandedNodeIds: PropTypes.arrayOf(PropTypes.string),
};

Node.defaultProps = {
    className: '',
    style: undefined,
    node: { name: '', children: [] },
    onClick: undefined,
    expandedNodeIds: [],
};

export { Node };
