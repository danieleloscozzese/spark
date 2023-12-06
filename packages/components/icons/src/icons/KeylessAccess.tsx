import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const KeylessAccess = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="KeylessAccess"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M10.5 5.03c.52.18.78.66.66 1.22v.07h.34c.4 0 .79 0 1.17.14 1.04.36 1.76 1.38 1.76 2.52v7.38c0 1.45-1.16 2.64-2.57 2.65h-3.28c-1.36 0-2.48-1.1-2.57-2.49 0-.09 0-.19 0-.28v-7.14c0-.74.22-1.38.71-1.92.53-.57 1.18-.85 1.94-.84h.61c0-.17-.02-.33 0-.48.06-.42.31-.69.7-.82.11-.04.4-.04.54 0h0Zm3.28 7.64v-3.57c0-.15 0-.31-.03-.45-.19-1-.97-1.66-1.95-1.66h-3.16c-1.12 0-1.98.88-1.99 2.04v7.27c0 .15.02.3.05.45.21.96.97 1.58 1.95 1.58 1.04 0 2.09 0 3.13 0 .18 0 .37-.02.54-.07.89-.24 1.46-1.01 1.46-2v-3.59h0Zm-3.56-6.35c.17 0 .32-.15.32-.33s-.14-.33-.32-.33c-.19 0-.32.14-.32.33s.14.32.32.32ZM18 8.84c-.02 1.17-.41 2.18-1.19 3.02-.13.14-.28.17-.42.09-.13-.08-.2-.24-.15-.39.03-.08.09-.15.15-.22.65-.72.98-1.58.97-2.57-.01-.92-.32-1.74-.93-2.43-.01-.02-.03-.03-.04-.04-.19-.21-.21-.41-.06-.56.16-.15.33-.12.53.09.77.84 1.14 1.85 1.16 3h0Z"/><path d="M16.71 8.7c-.02.93-.28 1.63-.82 2.21-.1.11-.23.18-.37.11-.09-.04-.19-.15-.21-.25-.02-.1.04-.24.1-.32.43-.49.65-1.06.63-1.72-.02-.58-.23-1.08-.61-1.51-.08-.09-.13-.22-.13-.33 0-.13.09-.23.21-.27.14-.05.26 0 .36.11.34.36.59.77.71 1.26.07.28.1.56.13.71h0ZM10.22 14.17h-2.16c-.34 0-.44-.1-.44-.46v-2.16c0-.26.12-.4.38-.4h4.44c.25 0 .38.14.38.39v2.24c0 .26-.13.39-.41.39h-2.19Zm-1.95-.68h3.87v-1.64h-3.86s0 .09 0 .13v1.51ZM10.22 14.66h2.17c.31 0 .44.14.42.45-.08 1.41-1.12 2.42-2.31 2.54-1.43.15-2.59-.85-2.84-2.17-.03-.14-.04-.29-.04-.44 0-.26.12-.39.38-.39h2.22Zm-1.9.68c.05.87.99 1.67 1.92 1.66.93-.02 1.86-.83 1.87-1.66h-3.79ZM10.21 10.67h-2.16c-.33 0-.44-.11-.43-.45.02-1.16.91-2.26 2.04-2.5 1.47-.31 2.86.67 3.12 2.18.02.11.03.22.03.33.02.3-.11.44-.4.44h-2.2Zm-1.89-.68h3.79c-.05-.68-.77-1.69-1.96-1.66-.91.02-1.84.86-1.83 1.66Z"/>',
      }}
    />
  )
)

KeylessAccess.displayName = 'KeylessAccess'

export const tags = ['KeylessAccess', '']