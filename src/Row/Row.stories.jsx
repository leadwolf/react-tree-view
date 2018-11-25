import './rowStories.scss';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Cell } from '../Cell';
import { Header } from '../Header';
import { dummyNode } from '../stories/node';
import { WithExpandedRowIdsState } from '../stories/WithExpandedRowIdsState';
import { Toggle } from '../Toggle';
import { Row } from './Row';

storiesOf('Row', module)
    .addDecorator(storyFn => <div className="story">{storyFn()}</div>)
    .add('default: !expanded', () => <Row />)
    .add('with node, default render', () => <Row node={dummyNode} />)
    .add('stateful, default render', () => (
        <WithExpandedRowIdsState
            renderChildren={(expandedRowIds, toggle) => (
                <Row
                    onClick={node => {
                        action('toggle')(node);
                        toggle(node);
                    }}
                    node={dummyNode}
                    expandedRowIds={expandedRowIds}
                />
            )}
        />
    ))
    .add('custom render', () => (
        <Row
            node={dummyNode}
            renderContent={({ node }) => (
                <div>
                    <button>toggle</button>
                    <div>{node.id}</div>
                    <div>As you can see, you can customise the content of a node</div>
                </div>
            )}
        />
    ))
    .add('stateful, custom render', () => (
        <WithExpandedRowIdsState
            renderChildren={(expandedRowIds, toggle) => (
                <Row
                    node={dummyNode}
                    expandedRowIds={expandedRowIds}
                    styles={{
                        content: {
                            height: '30px',
                        },
                    }}
                    renderContent={({ node, hasChildren }) => (
                        <React.Fragment>
                            <Cell>
                                {hasChildren && (
                                    <button
                                        onClick={() => {
                                            action('toggle')(node);
                                            toggle(node);
                                        }}
                                        type="button"
                                    >
                                        toggle
                                    </button>
                                )}
                                <div
                                    style={{
                                        paddingLeft: '10px',
                                        width: '200px',
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
        />
    ))
    .add('table example', () => (
        <div>
            <Header className="story-header">
                <Cell className="story-header-cell">Id</Cell>
                <Cell className="story-header-cell">Name</Cell>
            </Header>
            <WithExpandedRowIdsState
                renderChildren={(expandedRowIds, toggle) => (
                    <Row
                        onClick={node => {
                            action('toggle')(node);
                            toggle(node);
                        }}
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
            />
        </div>
    ));
