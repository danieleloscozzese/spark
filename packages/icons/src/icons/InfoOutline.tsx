import React from 'react'

import { IconProps } from '../Types'

export const InfoOutline = ({
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
    data-title="InfoOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m12,16.82c.57,0,1.03-.46,1.03-1.03v-4.64c0-.57-.46-1.03-1.03-1.03s-1.03.46-1.03,1.03v4.64c0,.57.46,1.03,1.03,1.03Zm0-7.66c.78,0,1.41-.63,1.41-1.41s-.63-1.41-1.41-1.41-1.41.63-1.41,1.41.63,1.41,1.41,1.41Z"/><path fill-rule="evenodd" d="m12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2Zm-7.89,10c0-4.36,3.53-7.89,7.89-7.89s7.89,3.53,7.89,7.89-3.53,7.89-7.89,7.89-7.89-3.53-7.89-7.89Z"/>',
    }}
  />
)

InfoOutline.displayName = 'InfoOutline'

export const tags = ['InfoOutline', '']
