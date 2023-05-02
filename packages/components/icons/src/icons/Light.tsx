import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Light = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5193 16.4691C11.7263 16.4691 11.8943 16.6371 11.8943 16.8441V18.8256C11.8943 19.0326 11.7263 19.2006 11.5193 19.2006C11.3123 19.2006 11.1443 19.0326 11.1443 18.8256V16.8441C11.1443 16.6371 11.3123 16.4691 11.5193 16.4691ZM7.61148 15.0855C7.75773 14.9393 7.99547 14.9393 8.14172 15.0855C8.28797 15.2318 8.28797 15.4695 8.14172 15.6158L6.74072 17.0168C6.66722 17.0903 6.57122 17.127 6.47522 17.127C6.37922 17.127 6.28323 17.0903 6.21048 17.0168C6.06423 16.8705 6.06423 16.6328 6.21048 16.4865L7.61148 15.0855ZM14.8859 15.0591C15.0322 14.9129 15.27 14.9129 15.4162 15.0591L16.8172 16.4594C16.9634 16.6064 16.9634 16.8434 16.8172 16.9896C16.7437 17.0631 16.6477 17.0999 16.5517 17.0999C16.4557 17.0999 16.3597 17.0631 16.2869 16.9896L14.8859 15.5894C14.7397 15.4431 14.7397 15.2054 14.8859 15.0591ZM11.5003 7.74355C13.682 7.74355 15.4565 9.51805 15.4565 11.7006C15.4565 13.8823 13.682 15.6568 11.5003 15.6568C9.31855 15.6568 7.54405 13.8823 7.54405 11.7006C7.54405 9.51805 9.31855 7.74355 11.5003 7.74355ZM11.5003 8.49355C9.73255 8.49355 8.29405 9.93205 8.29405 11.7006C8.29405 13.4683 9.73255 14.9068 11.5003 14.9068C13.268 14.9068 14.7065 13.4683 14.7065 11.7006C14.7065 9.93205 13.268 8.49355 11.5003 8.49355ZM6.3565 11.3443C6.5635 11.3443 6.7315 11.5123 6.7315 11.7193C6.7315 11.9263 6.5635 12.0943 6.3565 12.0943H4.375C4.168 12.0943 4 11.9263 4 11.7193C4 11.5123 4.168 11.3443 4.375 11.3443H6.3565ZM18.6253 11.3062C18.8323 11.3062 19.0003 11.4742 19.0003 11.6812C19.0003 11.8882 18.8323 12.0562 18.6253 12.0562H16.6438C16.4368 12.0562 16.2688 11.8882 16.2688 11.6812C16.2688 11.4742 16.4368 11.3062 16.6438 11.3062H18.6253ZM6.1834 6.41088C6.3304 6.26388 6.5674 6.26388 6.71365 6.41088L8.11465 7.81113C8.2609 7.95738 8.2609 8.19513 8.11465 8.34138C8.04115 8.41488 7.94515 8.45088 7.8499 8.45088C7.7539 8.45088 7.6579 8.41488 7.5844 8.34138L6.1834 6.94113C6.03715 6.79413 6.03715 6.55713 6.1834 6.41088ZM16.2602 6.38335C16.4064 6.2371 16.6434 6.2371 16.7904 6.38335C16.9367 6.53035 16.9367 6.76735 16.7904 6.9136L15.3894 8.31535C15.3159 8.3881 15.2199 8.42485 15.1239 8.42485C15.0279 8.42485 14.9319 8.3881 14.8584 8.31535C14.7122 8.16835 14.7122 7.93135 14.8584 7.78435L16.2602 6.38335ZM11.4812 4.19995C11.6882 4.19995 11.8562 4.36795 11.8562 4.57495V6.55645C11.8562 6.76345 11.6882 6.93145 11.4812 6.93145C11.2742 6.93145 11.1062 6.76345 11.1062 6.55645V4.57495C11.1062 4.36795 11.2742 4.19995 11.4812 4.19995Z"/>',
      }}
    />
  )
)

export const tags = ['light', 'criteria', 'location']
