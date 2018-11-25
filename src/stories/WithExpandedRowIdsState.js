import PropTypes from 'prop-types';
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

        return this.props.renderChildren(expandedRowIds, this.toggle);
    }
}

WithExpandedRowIdsState.propTypes = {
    /**
     * This function will be called with params `expandedRowIds`, `toggle`
     * - expandedRowIds: object map of node ids. The ids are truthy if they are expanded
     * - toggle: function that receives the clicked node as parameter and will handle togging
     * the expansion of that node
     */
    renderChildren: PropTypes.func,
};

export { WithExpandedRowIdsState };
