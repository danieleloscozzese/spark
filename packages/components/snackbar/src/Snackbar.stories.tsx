import { Button } from '@spark-ui/button'
import { Meta, StoryObj } from '@storybook/react'

import { addSnackbar, type AddSnackbarArgs, Snackbar } from '.'

const meta: Meta<typeof Snackbar> = {
  title: 'Experimental/Snackbar',
  component: Snackbar,
}

export default meta

const designs: ExcludeNull<AddSnackbarArgs>['design'][] = ['filled', 'tinted']

const intents: ExcludeNull<AddSnackbarArgs>['intent'][] = [
  'success',
  'alert',
  'error',
  'info',
  'neutral',
  'main',
  'basic',
  'support',
  'accent',
  'inverse',
]

export const Default: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <Button onClick={() => addSnackbar({ message: "You're done!" })}>Display snackbar</Button>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({ message: "You're done!" })\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}

export const Design: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
          {designs.map(design => (
            <Button key={design} onClick={() => addSnackbar({ message: "You're done!", design })}>
              {`Display ${design}${design === 'filled' ? ' (default)' : ''} snackbar`}
            </Button>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({ message: "You're done!", design })\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}

export const Intent: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
          {intents.map(intent => (
            <Button
              key={intent}
              {...(intent === 'inverse'
                ? {
                    intent: 'surface',
                  }
                : {
                    intent: intent === 'error' ? 'danger' : intent,
                  })}
              onClick={() => addSnackbar({ message: "You're done!", intent })}
            >
              {`Display ${intent}${intent === 'neutral' ? ' (default)' : ''} snackbar`}
            </Button>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({ message: "You're done!", intent })\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}
