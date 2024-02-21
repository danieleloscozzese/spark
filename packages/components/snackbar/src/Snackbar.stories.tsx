import { Meta, StoryFn } from '@storybook/react'

import { Snackbar } from '.'

const meta: Meta<typeof Snackbar> = {
  title: 'Experimental/Snackbar',
  component: Snackbar,
}

export default meta

export const Default: StoryFn = _args => <Snackbar>Hello World!</Snackbar>