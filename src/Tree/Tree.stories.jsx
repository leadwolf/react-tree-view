import { storiesOf } from '@storybook/react';
import React from 'react';

import { Container } from '../Container';
import { dummyNode } from '../stories/node';
import { Tree } from './Tree';

const BorderContainer = props => (
    <Container {...props} style={{ ...props.style, borderBottom: '1px solid' }} />
);

const headerId = 'table_header';
const cellStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid',
    flex: '1',
    padding: '0px 10px',
};

const TableContainer = props => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flex: '1',
                borderBottom: '1px solid',
            }}
        >
            <Container
                {...props}
                style={{
                    ...props.style,
                    width: `200px`,
                    borderRight: '1px solid',
                }}
            />
            <CustomHeader node={props.node} expanded={props.expanded} />
        </div>
    );
};

const CustomHeader = ({ node, expanded }) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            flex: '1',
        }}
    >
        <div style={cellStyle}>{node.id === headerId ? 'Node id' : node.id}</div>
        <div style={cellStyle}>
            {node.id === headerId
                ? 'Number of children'
                : `${(node.children || []).length} children`}
        </div>
        <div style={cellStyle}>
            {node.id === headerId ? 'Expanded ? ' : expanded ? 'yes' : 'no'}
        </div>
    </div>
);

storiesOf('Tree', module)
    .add('default', () => <Tree />)
    .add('with roots prop', () => <Tree roots={[dummyNode]} />)
    .add('expand root default', () => <Tree roots={[dummyNode]} defaultExpandRoot />)
    .add('with borders', () => (
        <Tree
            roots={[dummyNode]}
            defaultExpandRoot
            decorators={{ Container: BorderContainer }}
            style={{ border: '1px solid', borderBottom: 'none' }}
        />
    ))
    .add('like a table', () => (
        <Tree
            roots={[{ id: headerId }, dummyNode]}
            defaultExpandRoot
            decorators={{ Container: TableContainer }}
            style={{ border: '1px solid', borderBottom: 'none' }}
        />
    ));
