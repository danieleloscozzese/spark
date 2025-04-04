import React from 'react'

import { IconProps } from '../Types'

export const IdentityFill = ({
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
    data-title="IdentityFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m21.5,5c-.33-.33-.67-.5-1.17-.5H3.67c-.5,0-.83.17-1.17.5s-.5.75-.5,1.17v11.67c0,.5.17.83.5,1.17s.67.5,1.17.5h16.67c.42,0,.83-.17,1.17-.5s.5-.75.5-1.17V6.17c0-.42-.17-.83-.5-1.17Zm-13.67,5.17c.25-.25.58-.42.92-.42s.67.17.92.42.42.58.42,1-.17.67-.42,1c-.25.25-.58.42-.92.42s-.67-.17-.92-.42-.42-.58-.42-1,.17-.75.42-1Zm3.92,5.17h-6v-.25c0-.25.08-.5.25-.75s.33-.42.58-.5c.42-.17.75-.25,1.17-.33.33-.08.75-.08,1.08-.08s.67,0,1,.08c.33.08.75.17,1.17.33.25.08.42.25.58.5.17.25.25.5.25.75v.25h-.08Zm6.25-1.67h-4c-.33,0-.58-.25-.58-.58s.25-.58.58-.58h4c.33,0,.58.25.58.58s-.25.58-.58.58Zm0-2.83h-4c-.33,0-.58-.25-.58-.58s.25-.58.58-.58h4c.33,0,.58.25.58.58s-.25.58-.58.58Z"/>',
    }}
  />
)

IdentityFill.displayName = 'IdentityFill'

export const tags = ['IdentityFill', '']
