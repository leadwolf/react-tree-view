import React from 'react';

class WithExpandedRowIdsState extends React.Component {
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

        return this.props.children(expandedRowIds, this.toggle);
    }
}

export { WithExpandedRowIdsState };
