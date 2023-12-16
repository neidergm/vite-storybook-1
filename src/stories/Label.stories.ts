import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label";

const meta = {
    title: "Example/Label",
    component: Label,
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>

export const NormalLabel: Story = {
    args: {
        text: "Hello world"
    }
}
