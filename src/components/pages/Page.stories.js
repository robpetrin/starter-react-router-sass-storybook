import React from 'react';

import { Page } from './Page';
import * as HeaderStories from '../organisms/Header.stories';

export default {
  title: 'Pages/Example Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
