import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tree } from './Tree';
import { dummyNode } from '../stories/node';

storiesOf('Tree')
    .add('default', () => <Tree />)
    .add('with node', () => <Tree node={dummyNode} />);
