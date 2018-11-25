import './treeStories.scss';

import { storiesOf } from '@storybook/react';
import React from 'react';

import { Cell } from '../Cell';
import { Header } from '../Header';
import { dummyNode } from '../stories/node';
import { WithExpandedRowIdsState } from '../stories/WithExpandedRowIdsState';
import { Toggle } from '../Toggle';
import { Row } from '../Row';
import { Tree } from './Tree';

const TableRowContent = ({ node, hasChildren, indentLeft, expandedRowIds }) => (
    <React.Fragment>
        <Cell
            style={{
                paddingLeft: `${indentLeft}px`,
            }}
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
        onClick={toggle}
        node={dummyNode}
        expandedRowIds={expandedRowIds}
        classes={{ content: 'story-row-table-content' }}
        noIndent
        renderContent={TableRowContent}
    />
);

storiesOf('Tree', module)
    .addDecorator(storyFn => <div className="story">{storyFn()}</div>)
    .add('default', () => <Tree />)
    .add('stateful example', () => (
        <Tree>
            <WithExpandedRowIdsState>
                {(expandedRowIds, toggle) => (
                    <Row
                        onClick={toggle}
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
            </WithExpandedRowIdsState>
        </Tree>
    ))
    .add('table example', () => (
        <Tree>
            <Header className="story-header">
                <Cell className="story-header-cell">Id</Cell>
                <Cell className="story-header-cell">Name</Cell>
            </Header>
            <WithExpandedRowIdsState>{TableRow}</WithExpandedRowIdsState>
        </Tree>
    ))
    .add('multiple table example', () => (
        <Tree>
            <Header className="story-header">
                <Cell className="story-header-cell">Id</Cell>
                <Cell className="story-header-cell">Name</Cell>
            </Header>
            <WithExpandedRowIdsState>{TableRow}</WithExpandedRowIdsState>
            <Header className="story-header">
                <Cell className="story-header-cell">Id</Cell>
                <Cell className="story-header-cell">Name</Cell>
            </Header>
            <WithExpandedRowIdsState>{TableRow}</WithExpandedRowIdsState>
        </Tree>
    ));
