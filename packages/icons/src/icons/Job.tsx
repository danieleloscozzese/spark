import React from 'react'

import { IconProps } from '../Types'

export const Job = ({
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
    data-title="Job"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m21.16,5.92h-3.11c-.23-1.18-.82-2.28-1.69-3.14-1.16-1.13-2.72-1.78-4.36-1.78s-3.2.64-4.36,1.78c-.88.86-1.46,1.97-1.69,3.14h-3.11c-1.56,0-2.83,1.25-2.83,2.79v11.5c0,1.55,1.27,2.79,2.83,2.79h18.34c1.56,0,2.83-1.25,2.83-2.79v-11.5c0-1.55-1.27-2.79-2.83-2.79h-.01Zm-11.88-1.52c.72-.71,1.69-1.1,2.71-1.1s1.99.4,2.71,1.1c.43.43.74.95.92,1.52h-7.27c.18-.56.49-1.09.92-1.52h.01Zm-6.46,3.82h18.34c.28,0,.5.22.5.49v3.78h-8.5v-.49c0-.63-.52-1.14-1.17-1.14s-1.17.51-1.17,1.14v.49H2.31v-3.78c0-.27.22-.49.5-.49Zm18.34,12.48H2.81c-.28,0-.5-.22-.5-.49v-5.42h8.5v.49c0,.63.52,1.14,1.17,1.14s1.17-.51,1.17-1.14v-.49h8.5v5.42c0,.27-.22.49-.5.49h-.01Z"/>',
    }}
  />
)

Job.displayName = 'Job'

export const tags = ['Job', '']
