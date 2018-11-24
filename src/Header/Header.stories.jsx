import { storiesOf } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

storiesOf('Header', module)
    .add('default', () => <Header />)
    .add('with node', () => <Header node={{ id: '', name: 'this is the name of the node' }} />);
