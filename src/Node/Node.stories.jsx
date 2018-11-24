import { storiesOf } from '@storybook/react';
import React from 'react';

import { Node } from './Node';

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

        return (
            <Node
                expandedNodeIds={expandedNodeIds}
                node={{ name: 'this is the name of the node, click me to toggle' }}
                onClick={this.toggle}
            />
        );
    }
}

storiesOf('Node')
    .add('default', () => <Node />)
    .add('with node', () => <Node node={{ id: 'dummy_id', name: 'name of node' }} />)
    .add('stateful example', () => <StatefulNode />);
