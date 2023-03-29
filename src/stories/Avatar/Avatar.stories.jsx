import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "components/Avatar",
  component: Avatar,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />;

export const AvatarC = Template.bind({});
AvatarC.args = {
  size: "small",
  variant: "rounded",
};
