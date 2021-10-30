import React from 'react';
import { Button } from '@chakra-ui/core'
import { action, actions } from '@storybook/addon-actions'

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    variantCiolor: {Control : 'types'},
    children: {Control : 'test'},
    onClick: { action: 'clicked'}
  }
}

const Template = args => <Button {...args}/>

export const Success = Template.bind({})
Success.args = {
    variantCiolor: 'green',
    children: 'Success'
}

export const Danger = () => <Button {...actions('onClick', 'onMouseOver')} variantColor='red'>Danger</Button>