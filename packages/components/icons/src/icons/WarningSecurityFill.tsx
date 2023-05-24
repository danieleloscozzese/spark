import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const WarningSecurityFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3077 2.19537C12.5689 1.93488 11.7643 1.93488 11.0255 2.19537L5.29856 4.21474C3.92047 4.70066 2.96818 6.01898 3.00081 7.52102C3.06817 10.6212 3.42069 13.4968 5.25258 16.4731C6.73255 18.8777 8.84191 20.7482 11.3174 21.8241L11.3228 21.8263C11.8641 22.0579 12.4692 22.0579 13.0105 21.8264L13.0158 21.8241C15.4935 20.7472 17.6043 18.8744 19.0845 16.4669C20.9157 13.4883 21.2657 10.6197 21.3325 7.52114C21.3649 6.01918 20.4128 4.70065 19.0345 4.21466L13.3077 2.19537ZM11.0752 12.514C11.0752 13.0703 11.5228 13.5214 12.0751 13.5214C12.6273 13.5214 13.075 13.0703 13.075 12.514L13.075 7.47724C13.075 6.92089 12.6273 6.46988 12.0751 6.46988C11.5228 6.46988 11.0752 6.92089 11.0752 7.47724V12.514ZM12.0684 17.0471C12.6206 17.0471 13.0683 16.5961 13.0683 16.0397C13.0683 15.4834 12.6206 15.0324 12.0684 15.0324C11.5162 15.0324 11.0685 15.4834 11.0685 16.0397C11.0685 16.5961 11.5162 17.0471 12.0684 17.0471Z"/>',
      }}
    />
  )
)

WarningSecurityFill.displayName = 'WarningSecurityFill'

export const tags = ['WarningSecurityFill', '']