import './tree.scss';

import PropTypes from 'prop-types';
import React from 'react';

import { defaultDecorators } from '../decorators';
import { Node } from '../Node';
import { decoratorsPropType, nodePropType } from '../proptypes';

class Tree extends React.Component {
    state = {
        expandedNodeIds: this.props.defaultExpandRoot
            ? [...this.props.roots.map(root => root.id)]
            : [],
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
        const { className, style, roots, iconSize, headerMarginLeft, decorators } = this.props;
        const { Node: NodeDecorator = Node } = decorators;
        const { expandedNodeIds, selectedNodeId } = this.state;

        return (
            <div className={`rtv-tree ${className}`} style={style}>
                {roots.map(root => (
                    <NodeDecorator
                        key={root.id}
                        expandedNodeIds={expandedNodeIds}
                        node={root}
                        onClick={this.onClick}
                        depth={0}
                        iconSize={iconSize}
                        headerMarginLeft={headerMarginLeft}
                        selectedNodeId={selectedNodeId}
                        decorators={decorators}
                    />
                ))}
            </div>
        );
    }
}

Tree.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    node: PropTypes.arrayOf(nodePropType),
    defaultExpandRoot: PropTypes.bool,
    decorators: decoratorsPropType,
};

Tree.defaultProps = {
    className: '',
    style: undefined,
    roots: [],
    defaultExpandRoot: false,
    decorators: defaultDecorators,
};

export { Tree };
