import './treeStories.scss';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Cell } from '../Cell';
import { Header } from '../Header';
import { Row } from '../Row';
import { dummyNode } from '../stories/node';
import { WithExpandedRowIdsState } from '../stories/WithExpandedRowIdsState';
import { Toggle } from '../Toggle';
import { Tree } from './Tree';

const TableRowContent = ({ node, hasChildren, indentLeft, expandedRowIds }) => (
    <React.Fragment>
        <Cell
            style={{
                paddingLeft: `${indentLeft}px`,
            }}
            className="main"
        >
            {hasChildren && <Toggle expanded={Boolean(expandedRowIds[node.id])} />}

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
);

const TableRow = (expandedRowIds, toggle) => (
    <Row
        onClick={node => {
            action('toggle')(node);
            toggle(node);
        }}
        node={dummyNode}
        expandedRowIds={expandedRowIds}
        classes={{ content: 'story-row-table-content' }}
        noIndent
        renderContent={TableRowContent}
    />
);

storiesOf('Tree', module)
    .addDecorator(storyFn => <div className="story-tree">{storyFn()}</div>)
    .add('default', () => <Tree />)
    .add('stateful example', () => (
        <Tree>
            <WithExpandedRowIdsState
                renderChildren={(expandedRowIds, toggle) => (
                    <Row
                        onClick={node => {
                            action('toggle')(node);
                            toggle(node);
                        }}
                        node={dummyNode}
                        expandedRowIds={expandedRowIds}
                        styles={{
                            content: {
                                height: '30px',
                            },
                        }}
                        renderContent={({ node, hasChildren }) => (
                            <Cell>
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
                        )}
                    />
                )}
            />
        </Tree>
    ))
    .add('table example', () => (
        <Tree>
            <Header className="story-header">
                <Cell className="story-header-cell">Id</Cell>
                <Cell className="story-header-cell">Name</Cell>
            </Header>
            <WithExpandedRowIdsState renderChildren={TableRow} />
        </Tree>
    ))
    .add('multiple roots example', () => (
        <div className="story-tree-multi-roots">
            <Tree>
                <Header className="story-header">
                    <Cell className="story-header-cell">Id</Cell>
                    <Cell className="story-header-cell">Name</Cell>
                </Header>
                <WithExpandedRowIdsState renderChildren={TableRow} />
                <Header className="story-header">
                    <Cell className="story-header-cell">Id</Cell>
                    <Cell className="story-header-cell">Name</Cell>
                </Header>
                <WithExpandedRowIdsState renderChildren={TableRow} />
            </Tree>
        </div>
    ));
