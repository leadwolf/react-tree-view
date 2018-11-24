import { PropTypes } from 'prop-types';

export const nodePropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object), // cant do recursive prop type
});

export const decoratorsPropType = PropTypes.shape({
    Node: PropTypes.func,
    Container: PropTypes.func,
    Toggle: PropTypes.func,
    Header: PropTypes.func,
});
