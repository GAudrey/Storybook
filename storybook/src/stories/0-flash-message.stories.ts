import { Story, Meta } from '@storybook/angular/types-6-0';
import { FlashMessageComponent } from 'src/app/flash-message/flash-message.component';

export default{
  title: "Flash Message",
  component: FlashMessageComponent,
} as Meta;

const Template: Story<FlashMessageComponent> = (args: FlashMessageComponent) => ({props:args});

export const WithoutMessage = Template.bind({});
WithoutMessage.args = {
  heading: "Salut",
}

export const WithMessage = Template.bind({});
WithMessage.args = {
  heading: "Bonjour",
  msg: "Ceci est un message. Voilà.",
}

export const Warning = Template.bind({});
Warning.args = {
  heading: "Bonjour",
  msg: "Ceci est un message. Voilà.",
  type: "warning",
}

export const Theme: Story = (args) => ({
  props: args,
  template: `
    <div *ngFor="let theme of ['message', 'warning', 'success', 'error']">
      <app-flash-message msg="Je suis un chat" heading={{theme}} type={{theme}}></app-flash-message>
    </div>
  `
})