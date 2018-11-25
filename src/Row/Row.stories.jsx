import { storiesOf } from '@storybook/react';
import React from 'react';

import { dummyNode } from '../stories/node';
import { Toggle } from '../Toggle';
import { Row } from './Row';

class StatefulRow extends React.Component {
    state = {
        expandedRowIds: {},
    };

    toggle = node =>
        this.setState(({ expandedRowIds }) => ({
            expandedRowIds: {
                ...expandedRowIds,
                [node.id]: !Boolean(expandedRowIds[node.id]),
            },
        }));

    render() {
        const { expandedRowIds } = this.state;

        return (
            <Row
                onClick={this.toggle}
                node={dummyNode}
                expandedRowIds={expandedRowIds}
                renderContent={({ node, hasChildren }) => (
                    <React.Fragment>
                        {hasChildren && <Toggle expanded={Boolean(expandedRowIds[node.id])} />}

                        {hasChildren && (
                            <div
                                style={{
                                    paddingLeft: '10px',
                                }}
                            />
                        )}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            {node.id}
                        </div>
                    </React.Fragment>
                )}
            />
        );
    }
}

storiesOf('Row', module)
    .add('default: !expanded', () => <Row />)
    .add('with node', () => <Row node={dummyNode} />)
    .add('stateful example', () => <StatefulRow />);
