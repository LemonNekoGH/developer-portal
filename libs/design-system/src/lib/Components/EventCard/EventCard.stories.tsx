import { Meta, Story } from '@storybook/react';
import { EventCard, EventCardProps } from '.';

export default {
  component: EventCard,
  title: 'Components/EventCard',
} as Meta;

const Template: Story<EventCardProps> = (args) => {
  return (
    <div style={{ backgroundColor: '#f1f1f1', padding: '14px' }}>
      <EventCard {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  buttonText: 'CTA text',
  buttonUrl: '#changeme',
  description:
    'Everything you need to start building on Flow verything you need to start building on Flow everything you need to start building on Flow.',
  eventType: 'Online',
  imageSrc:
    'https://assets.website-files.com/5f6294c0c7a8cdf432b1c827/61689102d3325e237fd44b76_unnamed%20(8).png',
  tags: ['Flow official'],
  title: 'Event Title',
  eventDate: 'Mar 23',
};