import './node.scss';

import { PropTypes } from 'prop-types';
import React from 'react';

import { Container } from '../Container';
import { nodePropType } from '../proptypes';

const Node = ({ className, style, expandedNodeIds, node, onClick }) => {
    const isExpanded = expandedNodeIds.includes(node.id);

    return (
        <div className={`rtv-node ${className}`} style={style} onClick={onClick}>
            <Container expanded={isExpanded} node={node} />
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
    node: { name: '' },
    onClick: undefined,
    expandedNodeIds: [],
};

export { Node };
