import './node.scss';

import { PropTypes } from 'prop-types';
import React from 'react';

import { Container } from '../Container';
import { nodePropType } from '../proptypes';

const Node = ({ className, style, expandedNodeIds, node, onClick }) => {
    const isExpanded = expandedNodeIds.includes(node.id);
    const hasChildren = !!node.children;

    return (
        <div className={`rtv-node ${className}`} style={style}>
            <Container expanded={isExpanded} node={node} onClick={onClick} />
            <div className="rtv-node-children">
                {hasChildren &&
                    isExpanded &&
                    node.children.map(child => (
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
