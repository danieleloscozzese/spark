import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const LockFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M17.8958 8.95809V7.84976C17.8958 6.30809 17.2646 4.80809 16.1704 3.71642C15.051 2.60809 13.5697 1.99976 11.9958 1.99976C10.4219 1.99976 8.93214 2.60809 7.82115 3.71642C6.70174 4.81642 6.09574 6.29142 6.09574 7.84976V8.95809C4.91741 9.10809 4 10.0998 4 11.3081V19.6164C4 20.9331 5.07733 21.9998 6.40715 21.9998H17.5928C18.9227 21.9998 20 20.9331 20 19.6164V11.3081C20 10.0998 19.0826 9.10809 17.9043 8.95809H17.8958ZM11.9032 17.7748C10.7922 17.7748 9.88322 16.8748 9.88322 15.7748C9.88322 14.6748 10.7922 13.7748 11.9032 13.7748C13.0142 13.7748 13.9232 14.6748 13.9232 15.7748C13.9232 16.8748 13.0142 17.7748 11.9032 17.7748ZM15.8759 8.92476H8.10731V7.84976C8.10731 6.82476 8.51131 5.85809 9.24356 5.13309C9.9758 4.40809 10.9521 4.00809 11.9874 4.00809C13.0226 4.00809 13.9989 4.40809 14.7312 5.13309C15.455 5.84976 15.8674 6.84142 15.8674 7.84976V8.92476H15.8759Z"/>',
      }}
    />
  )
)

LockFill.displayName = 'LockFill'

export const tags = ['LockFill', '']
