import './tree.scss';

import PropTypes from 'prop-types';
import React from 'react';

import { defaultDecorators } from '../decorators';
import { decoratorsPropType, nodePropType } from '../proptypes';

class Tree extends React.Component {
    state = {
        expandedNodeIds: this.props.defaultExpandRoot ? [this.props.node.id] : [],
        selectedNodeId: undefined,
    };

    onClick = node =>
        this.setState(({ expandedNodeIds }) => ({
            expandedNodeIds: expandedNodeIds.includes(node.id)
                ? expandedNodeIds.filter(id => id !== node.id)
                : [...expandedNodeIds, node.id],
            selectedNodeId: node.id,
        }));

    render() {
        const { className, style, node, iconSize, headerMarginLeft, decorators } = this.props;
        const { Node: NodeDecorator } = decorators;
        const { expandedNodeIds, selectedNodeId } = this.state;

        return (
            <div className={`rtv-tree ${className}`} style={style}>
                {!!node && (
                    <NodeDecorator
                        expandedNodeIds={expandedNodeIds}
                        node={node}
                        onClick={this.onClick}
                        depth={0}
                        iconSize={iconSize}
                        headerMarginLeft={headerMarginLeft}
                        selectedNodeId={selectedNodeId}
                        decorators={decorators}
                    />
                )}
            </div>
        );
    }
}

Tree.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    node: nodePropType,
    defaultExpandRoot: PropTypes.bool,
    decorators: decoratorsPropType,
};

Tree.defaultProps = {
    className: '',
    style: undefined,
    node: undefined,
    defaultExpandRoot: false,
    decorators: defaultDecorators,
};

export { Tree };
