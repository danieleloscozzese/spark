import React from 'react'

import { IconProps } from '../Types'

export const GraphFill = ({
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
    data-title="GraphFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m20.46,22H3.54c-.85,0-1.54-.69-1.54-1.54V3.54c0-.85.69-1.54,1.54-1.54h16.92c.85,0,1.54.69,1.54,1.54v16.92c0,.85-.69,1.54-1.54,1.54ZM5.85,4.85c-.55,0-1,.45-1,1s.45,1,1,1h3.08c.55,0,1-.45,1-1s-.45-1-1-1h-3.08Zm-1,4.85c0-.55.45-1,1-1h6.92c.55,0,1,.45,1,1s-.45,1-1,1h-6.92c-.55,0-1-.45-1-1Zm14.93.51c.28-.47.13-1.09-.34-1.37-.47-.28-1.09-.13-1.37.34l-4.11,6.85-4.53-2.59c-.46-.26-1.04-.12-1.33.31l-3.08,4.62c-.31.46-.18,1.08.28,1.39.46.31,1.08.18,1.39-.28l2.56-3.84,4.57,2.61c.47.27,1.07.11,1.35-.35l4.62-7.69Z"/>',
    }}
  />
)

GraphFill.displayName = 'GraphFill'

export const tags = ['GraphFill', '']
