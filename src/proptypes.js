import { PropTypes } from 'prop-types';

export const nodePropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object), // cant do recursive prop type
});
