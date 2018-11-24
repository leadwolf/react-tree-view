import { storiesOf } from '@storybook/react';
import React from 'react';

import { Toggle } from './Toggle';

storiesOf('Toggle')
    .add('default (expand)', () => <Toggle />)
    .add('hide', () => <Toggle expanded />);
