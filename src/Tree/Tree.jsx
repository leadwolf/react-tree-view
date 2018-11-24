import './tree.scss';

import PropTypes from 'prop-types';
import React from 'react';

import { nodePropType } from '../proptypes';

import { Node } from '../Node';

class Tree extends React.Component {
    state = {
        expandedNodeIds: [],
    };

    onClick = node =>
        this.setState(({ expandedNodeIds }) => ({
            expandedNodeIds: expandedNodeIds.includes(node.id)
                ? expandedNodeIds.filter(id => id !== node.id)
                : [...expandedNodeIds, node.id],
        }));

    render() {
        const { className, style, node, iconSize, headerMarginLeft } = this.props;
        const { expandedNodeIds } = this.state;

        return (
            <div className={`rtv-tree ${className}`} style={style}>
                <Node
                    expandedNodeIds={expandedNodeIds}
                    node={node}
                    onClick={this.onClick}
                    depth={0}
                    iconSize={iconSize}
                    headerMarginLeft={headerMarginLeft}
                />
            </div>
        );
    }
}

Tree.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    node: nodePropType,
};

Tree.defaultProps = {
    className: '',
    style: undefined,
    node: { id: '', name: '' },
};

export { Tree };
