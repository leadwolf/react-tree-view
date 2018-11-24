import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tree } from './Tree';
import { dummyNode } from '../stories/node';

storiesOf('Tree', module)
    .add('default', () => <Tree />)
    .add('with node prop', () => <Tree node={dummyNode} />)
    .add('expand root default', () => <Tree node={dummyNode} defaultExpandRoot />);
