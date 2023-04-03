import { Story, Meta } from '@storybook/angular/types-6-0';
import { ExoButtonComponent } from 'src/app/exo-button/exo-button.component';

export default {
  title: "Exo button",
  component: ExoButtonComponent,

  argTypes: {
    theme: {
      options: ['default', 'warning', 'danger', 'valid', 'primary'],
      control: 'select',
    },
    radius: {
      control: {
        type: 'range',
        step: 1,
        min: 0,
        max: 25,
      }
    },
    darkText: {
      control: {
        type: 'boolean',
      }
    },
    color: {
      control: 'color',
    },
    shadowDistance: {
      control: {
        type: 'range',
        min: 0,
        max: 25,
        step: 1,
      }
    },
    shadowColor: {
      control: 'color',
    }
  }
} as Meta;

export const Basic: Story = (args) => ({
  props: args,
  template: `
    <app-exo-button bgc={{color}} radius={{radius}} shadowDistance={{shadowDistance}} shadowColor={{shadowColor}} dark={{darkText}} theme={{theme}} disabled={{disabled}}>
      {{buttonText}}
    </app-exo-button>
  `
});

Basic.args = {
  buttonText: "Whatever",
  theme: "default",
  color: "#fc6449",
  shadowColor: 'rgba(252, 100, 73, 0.48)',
  darkText: true,
}