import { withInfo } from '@storybook/addon-info';
import { configure, addDecorator } from '@storybook/react';

addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.(js|jsx)$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
