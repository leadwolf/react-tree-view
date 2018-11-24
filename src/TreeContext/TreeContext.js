import React from 'react';

import { Container } from '../Container';
import { Header } from '../Header';
import { Node } from '../Node';
import { Toggle } from '../Toggle';

export const TreeContext = React.createContext({
    node: Node.defaultProps,
    container: Container.defaultProps,
    toggle: Toggle.defaultProps,
    header: Header.defaultProps,
});
