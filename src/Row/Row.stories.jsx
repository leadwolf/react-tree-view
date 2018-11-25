import './rowStories.scss';

import { storiesOf } from '@storybook/react';
import React from 'react';

import { dummyNode } from '../stories/node';
import { Toggle } from '../Toggle';
import { Row } from './Row';
import { WithExpandedRowIdsState } from '../stories/WithExpandedRowIdsState';

const Cell = ({ style, children }) => (
    <div className="story-row-table-content-cell" style={style}>
        {children}
    </div>
);

storiesOf('Row', module)
    .addDecorator(storyFn => <div className="story">{storyFn()}</div>)
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
    ))
    .add('table example', () => (
        <WithExpandedRowIdsState>
            {(expandedRowIds, toggle) => (
                <Row
                    onClick={toggle}
                    node={dummyNode}
                    expandedRowIds={expandedRowIds}
                    classes={{ content: 'story-row-table-content' }}
                    noIndent
                    renderContent={({ node, hasChildren, indentLeft }) => (
                        <React.Fragment>
                            <Cell
                                style={{
                                    paddingLeft: `${indentLeft}px`,
                                }}
                            >
                                {hasChildren && (
                                    <Toggle expanded={Boolean(expandedRowIds[node.id])} />
                                )}

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
                            </Cell>
                            <Cell>{node.name}</Cell>
                        </React.Fragment>
                    )}
                />
            )}
        </WithExpandedRowIdsState>
    ));
