import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/button/button.component';

export default{
  title: "Button",
  component: ButtonComponent,

  argTypes: {
    buttonText: {
      control: "color",
    },
    disabled: {
      options:['disabled'],
      control: "check",
    },
    theme: {
      options: ['default', 'danger', 'valid', 'primary'],
      control: "select",
    }
  }
} as Meta;

export const Basic: Story = (args) => ({
  props: args,
  template: `
    <app-button disabled={{disabled}} theme={{theme}}>
      {{buttonText}}
    </app-button>
  `
})

Basic.args = {
  buttonText: "Click on me!",
  theme: "default",
}