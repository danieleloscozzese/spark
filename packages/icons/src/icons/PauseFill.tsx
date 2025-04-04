import React from 'react'

import { IconProps } from '../Types'

export const PauseFill = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ref,
  ...props
}: IconProps) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-title="PauseFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m12,2C6.5,2,2,6.5,2,12s4.5,10,10,10,10-4.5,10-10S17.5,2,12,2Zm2.83,13.58c0,.42-.33.75-.75.75s-.75-.33-.75-.75v-7.17c0-.42.33-.75.75-.75s.75.33.75.75v7.17Zm-4.25-7.17v7.17c0,.42-.33.75-.75.75s-.75-.33-.75-.75v-7.17c0-.42.33-.75.75-.75s.75.33.75.75Z"/>',
    }}
  />
)

PauseFill.displayName = 'PauseFill'

export const tags = ['PauseFill', '']
