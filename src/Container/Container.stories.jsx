import { storiesOf } from '@storybook/react';
import React from 'react';

import { Container } from './Container';

class StatefulContainer extends React.Component {
    state = {
        expanded: false,
    };

    toggle = () => this.setState(({ expanded }) => ({ expanded: !expanded }));

    render() {
        const { expanded } = this.state;

        return (
            <Container
                expanded={expanded}
                node={{ name: 'this is the name of the node, click me to toggle' }}
                onClick={this.toggle}
            />
        );
    }
}

storiesOf('Container', module)
    .add('default', () => <Container />)
    .add('with node', () => <Container node={{ name: 'this is the name of the node' }} />)
    .add('stateful example', () => <StatefulContainer />);
