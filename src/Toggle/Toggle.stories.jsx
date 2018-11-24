import { storiesOf } from '@storybook/react';
import React from 'react';

import { Toggle } from './Toggle';

class StatefulToggle extends React.Component {
    state = {
        expanded: false,
    };

    toggle = () => this.setState(({ expanded }) => ({ expanded: !expanded }));

    render() {
        const { expanded } = this.state;

        return (
            <div onClick={this.toggle} style={{ cursor: 'pointer' }}>
                <div>click me to trigger the animation</div>
                <Toggle expanded={expanded} />
            </div>
        );
    }
}

storiesOf('Toggle', module)
    .add('default: !expanded', () => <Toggle />)
    .add('expanded', () => <Toggle expanded />)
    .add('animation example', () => <StatefulToggle />);
