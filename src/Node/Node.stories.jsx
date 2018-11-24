import { storiesOf } from '@storybook/react';
import React from 'react';

import { Node } from './Node';

const node = {
    id: 'dummy_id',
    name: 'name of node',
    children: [
        { id: 'dummy_child_1', name: 'child 1' },
        { id: 'dummy_child_3', name: 'child 2' },
        { id: 'dummy_child_2', name: 'child 3' },
    ],
};

class StatefulNode extends React.Component {
    state = {
        expandedNodeIds: [],
    };

    toggle = node =>
        this.setState(({ expandedNodeIds }) => ({
            expandedNodeIds: expandedNodeIds.includes(node.id)
                ? expandedNodeIds.filter(id => id !== node.id)
                : [...expandedNodeIds, node.id],
        }));

    render() {
        const { expandedNodeIds } = this.state;

        return <Node expandedNodeIds={expandedNodeIds} node={node} onClick={this.toggle} />;
    }
}

storiesOf('Node')
    .add('default', () => <Node />)
    .add('with node', () => <Node node={node} />)
    .add('stateful example', () => <StatefulNode />);
