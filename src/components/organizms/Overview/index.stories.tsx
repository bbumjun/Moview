import React from "react";
import { Story } from "@storybook/react";
import Overview, { IOverview } from "./index";
export default {
  component: Overview,
  title: "Overview",
};
const Template: Story<IOverview> = (args) => <Overview {...args} />;
export const Default = Template.bind({});
Default.args = {
  summary:
    "콩과 보호자들은 정착할 수 있는 곳을 찾아 특별하고 강력한 유대감을 형성하고 있는 지아와 함께 여정을 떠나게 된다. 그러던 중 지구 파괴를 위한 회심의 날을 휘두르는 고질라와 마주하게 되고, 보이지 않는 힘에 의해 맞붙게 된 두 전설의 대결은 지구 깊은 곳에 도사린 수수께끼의 시작에 불과할 뿐이었는데…",
};
