import { PropTypes } from 'prop-types';

export const nodePropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object), // cant do recursive prop type
});

export const defaultNode = {
    id: '',
    name: undefined,
    children: [],
};
