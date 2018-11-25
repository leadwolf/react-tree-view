import React from 'react';

import { Cell } from '../Cell';
import { Toggle } from '../Toggle';

export const DefaultContent = ({ node, hasChildren, expandedRowIds, indentLeft }) => (
    <React.Fragment>
        <Cell>
            {hasChildren && <Toggle expanded={Boolean(expandedRowIds[node.id])} />}

            <div
                style={{
                    paddingLeft: '10px',
                }}
            >
                {node.id}
            </div>
        </Cell>
    </React.Fragment>
);

export const Indent = ({ indentLeft }) => (
    <div
        style={{
            paddingLeft: `${indentLeft}px`,
        }}
    />
);
