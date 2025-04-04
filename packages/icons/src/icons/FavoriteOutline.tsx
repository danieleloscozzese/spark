import React from 'react'

import { IconProps } from '../Types'

export const FavoriteOutline = ({
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
    data-title="FavoriteOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m21.92,10.54c-.08-.32-.24-.63-.49-.95-.24-.24-.49-.48-.81-.63-.32-.16-.65-.24-1.05-.24h-5.1v-3.01c0-.32-.08-.63-.24-.95-.16-.32-.32-.55-.57-.79-.24-.24-.57-.4-.81-.55-.4-.08-.73-.16-1.05-.16-.4,0-.89.08-1.21.32-.4.24-.73.48-.89.87l-3.24,5.07h-2.75c-.4,0-.89.16-1.21.48-.32.32-.49.71-.49,1.19v7.13c0,.4.16.87.49,1.19.32.32.73.48,1.21.48h3l.89.4c.49.24,1.13.4,1.7.4h9.07c.65,0,1.21-.24,1.7-.63.49-.4.73-.95.81-1.5l1.13-7.05c0-.32,0-.63-.08-1.03Zm-15.95,7.52h-2.02v-6.65h2.02v6.65Zm12.96.32c0,.16-.08.32-.16.4-.08.08-.24.16-.4.16h-9.15c-.24,0-.57-.08-.81-.16l-.49-.24v-7.76l3.4-5.31c.08-.08.08-.16.16-.16.08-.08.16,0,.32-.08h.24c.08,0,.16.08.16.08q.08.08.16.16c0,.08.08.16.08.24v3.96c0,.55.4.95.97.95h6.07c.08,0,.16,0,.24.08.08,0,.16.08.24.16.08.08.08.16.16.24v.24l-1.21,7.05Z"/>',
    }}
  />
)

FavoriteOutline.displayName = 'FavoriteOutline'

export const tags = ['FavoriteOutline', '']
