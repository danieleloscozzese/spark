import React from 'react'

import { IconProps } from '../Types'

export const GraphArrowUp = ({
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
    data-title="GraphArrowUp"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m2.29,17.7c.39.4,1.02.4,1.41,0l4.83-4.96,2.97,3.05c.32.32.74.5,1.18.5s.87-.18,1.18-.5h0s6.12-6.28,6.12-6.28v3.21c0,.57.45,1.03,1,1.03s1-.46,1-1.03v-5.68c0-.57-.45-1.03-1-1.03h-5.54c-.55,0-1,.46-1,1.03s.45,1.03,1,1.03h3.12l-5.89,6.05-2.97-3.05c-.32-.32-.74-.5-1.18-.5s-.87.18-1.18.5h0s-5.05,5.19-5.05,5.19c-.39.4-.39,1.05,0,1.45Z"/>',
    }}
  />
)

GraphArrowUp.displayName = 'GraphArrowUp'

export const tags = ['GraphArrowUp', '']
