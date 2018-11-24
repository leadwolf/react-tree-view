import { storiesOf } from '@storybook/react';
import React from 'react';

import { dummyNode } from '../stories/node';
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

        return <Node expandedNodeIds={expandedNodeIds} node={dummyNode} onClick={this.toggle} />;
    }
}

storiesOf('Node', module)
    .add('default', () => <Node />)
    .add('with node prop', () => <Node node={dummyNode} />)
    .add('stateful example', () => <StatefulNode />);
