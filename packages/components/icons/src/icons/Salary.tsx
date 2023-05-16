import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Salary = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 4.19995C17.1944 4.19995 21 8.00553 21 12.7C20.9956 17.3925 17.1926 21.1955 12.5 21.2C7.80558 21.2 4 17.3944 4 12.7C4 8.00553 7.80558 4.19995 12.5 4.19995ZM12.5 5.00033C8.24762 5.00033 4.80038 8.44757 4.80038 12.7C4.80038 16.9523 8.24762 20.3996 12.5 20.3996C16.7524 20.3996 20.1996 16.9523 20.1996 12.7C20.1952 8.4494 16.7506 5.00474 12.5 5.00033ZM9.22572 9.82772C10.894 7.81863 13.961 7.47477 16.0783 9.06195C16.3124 9.23968 16.3495 9.56422 16.1625 9.786C15.9763 10.007 15.6378 10.0441 15.4037 9.86868C15.0258 9.58431 14.5939 9.37181 14.1325 9.24122C12.1234 8.67404 10.0124 9.76204 9.41581 11.6715H12.5098C12.8096 11.6715 13.0515 11.9017 13.0515 12.1861C13.0515 12.4705 12.8096 12.7015 12.5098 12.7015H9.25895C9.25972 12.8738 9.27363 13.0461 9.30222 13.2161H12.5098C12.8096 13.2161 13.0515 13.4472 13.0515 13.7315C13.0515 14.0151 12.8096 14.2462 12.5098 14.2462H9.63218C9.76663 14.5143 9.93509 14.7655 10.1337 14.9942C11.4682 16.5288 13.859 16.746 15.474 15.4771C15.705 15.2948 16.0466 15.3249 16.2382 15.5436C16.4299 15.763 16.3982 16.0884 16.1679 16.27C15.2901 16.9569 14.1889 17.3332 13.0515 17.3363C10.9883 17.3325 9.15 16.0953 8.46227 14.2462H7.63313C7.33331 14.2462 7.09068 14.0151 7.09068 13.7315C7.09068 13.4472 7.33331 13.2161 7.63313 13.2161H8.20727C8.18563 13.0454 8.17481 12.873 8.17481 12.7015H7.63313C7.33331 12.7015 7.09068 12.4705 7.09068 12.1861C7.09068 11.9017 7.33331 11.6715 7.63313 11.6715H8.29922C8.45995 10.9992 8.77677 10.3694 9.22572 9.82772Z"/>',
      }}
    />
  )
)

Salary.displayName = 'Salary'

export const tags = ['Salary', '']
