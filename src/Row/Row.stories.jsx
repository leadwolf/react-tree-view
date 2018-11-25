import { storiesOf } from '@storybook/react';
import React from 'react';

import { dummyNode } from '../stories/node';
import { Toggle } from '../Toggle';
import { Row } from './Row';
import { WithExpandedRowIdsState } from '../stories/WithExpandedRowIdsState';

storiesOf('Row', module)
    .add('default: !expanded', () => <Row />)
    .add('with node', () => <Row node={dummyNode} />)
    .add('with renderContent', () => (
        <Row node={dummyNode} renderContent={({ node }) => <div>{node.id}</div>} />
    ))
    .add('stateful example', () => (
        <WithExpandedRowIdsState>
            {(expandedRowIds, toggle) => (
                <Row
                    onClick={toggle}
                    node={dummyNode}
                    expandedRowIds={expandedRowIds}
                    renderContent={({ node, hasChildren }) => (
                        <React.Fragment>
                            {hasChildren && <Toggle expanded={Boolean(expandedRowIds[node.id])} />}

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingLeft: '10px',
                                }}
                            >
                                {node.id}
                            </div>
                        </React.Fragment>
                    )}
                />
            )}
        </WithExpandedRowIdsState>
    ));
