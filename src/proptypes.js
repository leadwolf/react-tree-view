import { PropTypes } from 'prop-types';

export const nodePropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
});
