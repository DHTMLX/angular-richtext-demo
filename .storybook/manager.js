import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "dhtmlxRichtext",
  brandUrl: "https://dhtmlx.github.io/angular-richtext-demo/?path=/story",
  brandImage: "./logo.svg",
});

addons.setConfig({
  showPanel: false,
  enableShortcuts: false,
  theme,
});
