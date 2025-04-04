import React from 'react'

import { IconProps } from '../Types'

export const PhoneFill = ({
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
    data-title="PhoneFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m5.97,2c-.65,0-1.28.26-1.75.71,0,0-.01.01-.02.02l-.6.62c-.88.87-1.44,2.02-1.57,3.26-.14,1.24.16,2.48.83,3.53,0,0,0,.01.01.02,2.93,4.32,6.66,8.05,10.98,10.97h.02c1.04.69,2.29.98,3.53.84,1.23-.14,2.38-.69,3.25-1.57l.62-.6s.01-.01.02-.02c.46-.47.71-1.1.71-1.75s-.26-1.28-.71-1.75h-.01s-2.64-2.62-2.64-2.62h0c-.46-.46-1.09-.72-1.74-.72s-1.28.26-1.74.71h0c-.09.09-.21.14-.34.14s-.24-.05-.33-.13l-4.14-4.14h0s-.08-.1-.1-.15c-.02-.06-.04-.12-.04-.18s.01-.12.04-.18c.02-.06.06-.11.1-.15h.01c.46-.48.71-1.1.71-1.76s-.26-1.28-.71-1.74l-2.63-2.63h0c-.47-.47-1.09-.72-1.75-.72Z"/>',
    }}
  />
)

PhoneFill.displayName = 'PhoneFill'

export const tags = ['PhoneFill', '']
