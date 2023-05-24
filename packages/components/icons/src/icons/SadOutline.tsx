import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SadOutline = React.forwardRef(
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
          '<path d="M8.60412 16.5444C9.35501 14.9327 11.2279 13.9919 13.1256 14.4891 14.1099 14.7589 14.9865 15.4978 15.5135 16.5649 15.7581 17.0601 16.3577 17.2633 16.8529 17.0187 17.3481 16.7742 17.5513 16.1745 17.3067 15.6793 16.555 14.157 15.2469 12.9946 13.6476 12.5584L13.639 12.5561C10.808 11.8111 7.95293 13.2063 6.79122 15.6998 6.55799 16.2004 6.77474 16.7953 7.27536 17.0286 7.77598 17.2618 8.37089 17.0451 8.60412 16.5444ZM7.26921 7.25004C7.82149 7.25004 8.2692 7.69776 8.2692 8.25004 8.2692 8.35205 8.30973 8.44987 8.38186 8.522 8.45399 8.59413 8.55181 8.63466 8.65382 8.63466 8.75583 8.63466 8.85365 8.59413 8.92578 8.522 8.99791 8.44987 9.03844 8.35205 9.03844 8.25004 9.03844 7.69776 9.48615 7.25004 10.0384 7.25004 10.5907 7.25004 11.0384 7.69776 11.0384 8.25004 11.0384 8.88248 10.7872 9.48902 10.34 9.93622 9.8928 10.3834 9.28626 10.6347 8.65382 10.6347 8.02138 10.6347 7.41484 10.3834 6.96764 9.93622 6.52044 9.48902 6.26921 8.88248 6.26921 8.25004 6.26921 7.69776 6.71692 7.25004 7.26921 7.25004ZM14.9611 8.25004C14.9611 7.69776 14.5134 7.25004 13.9611 7.25004 13.4088 7.25004 12.9611 7.69776 12.9611 8.25004 12.9611 8.88248 13.2123 9.48902 13.6595 9.93622 14.1067 10.3834 14.7133 10.6347 15.3457 10.6347 15.9782 10.6347 16.5847 10.3834 17.0319 9.93622 17.4791 9.48902 17.7303 8.88248 17.7303 8.25004 17.7303 7.69776 17.2826 7.25004 16.7303 7.25004 16.178 7.25004 15.7303 7.69776 15.7303 8.25004 15.7303 8.35205 15.6898 8.44987 15.6177 8.522 15.5455 8.59413 15.4477 8.63466 15.3457 8.63466 15.2437 8.63466 15.1459 8.59413 15.0738 8.522 15.0016 8.44987 14.9611 8.35205 14.9611 8.25004Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47716 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47716 17.5229 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"/>',
      }}
    />
  )
)

SadOutline.displayName = 'SadOutline'

export const tags = ['SadOutline', '']