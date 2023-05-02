import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Loft = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2725 5.19995C19.4795 5.19995 19.6475 5.37123 19.6475 5.58226C19.6475 5.79329 19.4795 5.96457 19.2725 5.96457H19.229V17.4262H19.625C19.832 17.4262 20 17.5974 20 17.8085C20 18.0203 19.832 18.1908 19.625 18.1908H9.99725C9.98225 18.1931 9.96875 18.2 9.95375 18.2H7.85075C7.835 18.2 7.82225 18.1931 7.80725 18.1908H5.375C5.168 18.1908 5 18.0203 5 17.8085C5 17.5974 5.168 17.4262 5.375 17.4262H5.77175V5.96457H5.74775C5.54075 5.96457 5.37275 5.79329 5.37275 5.58226C5.37275 5.37123 5.54075 5.19995 5.74775 5.19995H19.2725ZM9.57875 14.3562H8.22575V17.4269H9.57875V14.3562ZM18.479 5.96457H6.52175V17.4262H7.47575V13.9739C7.47575 13.7621 7.643 13.5916 7.85075 13.5916H9.95375C10.1607 13.5916 10.3287 13.7621 10.3287 13.9739V17.4262H18.479V5.96457ZM17.5685 13.5916C17.7755 13.5916 17.9435 13.7621 17.9435 13.9739V16.2288C17.9435 16.4398 17.7755 16.6111 17.5685 16.6111H12.5285C12.3208 16.6111 12.1535 16.4398 12.1535 16.2288V13.9739C12.1535 13.7621 12.3208 13.5916 12.5285 13.5916H17.5685ZM17.1935 14.3562H15.4415V15.8465H17.1935V14.3562ZM14.6915 14.3562H12.9035V15.8465H14.6915V14.3562ZM17.5685 6.67872C17.7755 6.67872 17.9435 6.84923 17.9435 7.06103V12.5686C17.9435 12.7796 17.7755 12.9509 17.5685 12.9509H7.41575C7.208 12.9509 7.04075 12.7796 7.04075 12.5686V7.06103C7.04075 6.84923 7.208 6.67872 7.41575 6.67872H17.5685ZM17.1935 10.1967H15.4415V12.1862H17.1935V10.1967ZM12.1535 10.1967H10.3287V12.1862H12.1535V10.1967ZM14.6915 10.1967H12.9035V12.1862H14.6915V10.1967ZM9.57875 10.1967H7.79075V12.1862H9.57875V10.1967ZM14.6915 7.44333H12.9035V9.43286H14.6915V7.44333ZM17.1935 7.44257H15.4415V9.4321H17.1935V7.44257ZM9.57875 7.44257H7.79075V9.4321H9.57875V7.44257ZM12.1535 7.44257H10.3287V9.4321H12.1535V7.44257Z"/>',
      }}
    />
  )
)

export const tags = ['loft', 'criteria', 'location']
