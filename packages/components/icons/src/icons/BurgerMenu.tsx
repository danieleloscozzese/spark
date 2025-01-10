import React from 'react'

import { IconProps } from '../Types'

export const BurgerMenu = ({
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
    data-title="BurgerMenu"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m2,5.12c0-.62.45-1.12,1-1.12h18c.55,0,1,.5,1,1.12s-.45,1.12-1,1.12H3c-.55,0-1-.5-1-1.12Zm0,6.88c0-.62.45-1.12,1-1.12h18c.55,0,1,.5,1,1.12s-.45,1.12-1,1.12H3c-.55,0-1-.5-1-1.12Zm0,6.88c0-.62.45-1.12,1-1.12h18c.55,0,1,.5,1,1.12s-.45,1.12-1,1.12H3c-.55,0-1-.5-1-1.12Z"/>',
    }}
  />
)

BurgerMenu.displayName = 'BurgerMenu'

export const tags = ['BurgerMenu', '']
