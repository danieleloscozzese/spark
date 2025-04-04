import React from 'react'

import { IconProps } from '../Types'

export const CopyFill = ({
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
    data-title="CopyFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m7.63,2.67c-.33.42-.58.92-.58,1.5v12.08c0,.58.25,1.17.66,1.5.41.42.99.67,1.49.67h9.16c.58,0,1.16-.25,1.49-.67.41-.42.66-1,.66-1.5V7c0-.17-.08-.42-.25-.5l-4.21-4.25c-.17-.17-.33-.25-.5-.25h-6.35c-.58,0-1.16.25-1.57.67Z"/><path d="m5.65,22h9.9c.41,0,.74-.33.74-.75s-.33-.75-.74-.75H5.65c-.17,0-.33-.08-.5-.17-.17-.17-.17-.33-.17-.5V7c0-.42-.33-.75-.74-.75s-.74.33-.74.75v12.83c0,.58.25,1.17.66,1.5.41.42.91.67,1.49.67Z"/>',
    }}
  />
)

CopyFill.displayName = 'CopyFill'

export const tags = ['CopyFill', '']
