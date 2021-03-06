import React from 'core-js/library/fn/reflect/es7/metadata'
import { addDecorator } from '@storybook/react'
import Center from '../src/Components/Center'
import { ThemeProvider, theme, CSSReset} from '@chakra-ui/core'

//addDecorator(story => <ThemeProvider theme={theme}><CSSReset/>{story()}</ThemeProvider>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <Story/>
    </ThemeProvider>
  )
]