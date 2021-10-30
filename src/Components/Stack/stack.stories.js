import Stack from '../Components/Stack'

export default {
  title: 'Components/Stack',
  component: Stack, 
  argTypes: {
    numberOfChildren: { type: 'number', defaultTypes: 4 }
  }
}


const Template = ({ numberOfChildren, ...args }) => (
  // eslint-disable-next-line react/jsx-no-undef
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div style={{
       width: '50px',
       height: '50px', 
       backgroundColor: 'red',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
      }}>{n + 1}</div>
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
}

export const Vertical = Template.bind({})
Horizontal.args = {
  direction: 'column',
  spacing: 2,
  wrap: false,
}