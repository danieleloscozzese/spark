import React from 'react'

import { IconProps } from '../Types'

export const TrashCloseOutline = ({
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
    data-title="TrashCloseOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m20.11,6.17h-3.79c-.08-1.08-.48-2.08-1.21-2.83-.81-.83-1.94-1.33-3.07-1.33s-2.26.5-3.07,1.33c-.73.75-1.21,1.75-1.21,2.83h-3.79c-.57,0-.97.42-.97,1,0,.5.4,1,.97,1h1.05v11.5c0,.67.24,1.25.65,1.67.4.42,1.05.67,1.61.67h9.44c.65,0,1.21-.25,1.61-.67.4-.42.65-1.08.65-1.67v-11.58h1.05c.48,0,.97-.42.97-1,0-.5-.4-.92-.89-.92Zm-9.85-1.5c.48-.5,1.05-.75,1.7-.75s1.29.25,1.7.75c.4.42.65.92.65,1.5h-4.68c.08-.58.32-1.08.65-1.5Zm6.86,15c0,.08-.08.25-.08.33-.08.08-.16.08-.32.08H7.28c-.08,0-.24-.08-.32-.08-.08-.08-.08-.17-.08-.33v-11.58h10.25v11.58Z"/><path fill-rule="evenodd" d="m15.11,11.33c-.4-.42-.97-.42-1.37,0l-1.7,1.75-1.7-1.75c-.4-.42-.97-.42-1.37,0-.4.42-.4,1,0,1.42l1.7,1.75-1.7,1.75c-.4.42-.4,1,0,1.42.4.42.97.42,1.37,0l1.7-1.75,1.7,1.75c.4.42.97.42,1.37,0,.4-.42.4-1,0-1.42l-1.7-1.75,1.7-1.75c.32-.42.32-1.08,0-1.42Z"/>',
    }}
  />
)

TrashCloseOutline.displayName = 'TrashCloseOutline'

export const tags = ['TrashCloseOutline', '']
