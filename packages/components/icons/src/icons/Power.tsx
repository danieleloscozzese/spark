import { IconProps } from '../Types'

export const Power = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2857 5.19995C13.7869 5.19995 14.1989 5.64612 14.2456 6.21661L14.25 6.32495V7.07495C14.25 7.25905 14.1363 7.41216 13.9863 7.44391L13.9286 7.44995H13.5V8.19995H15.8136C16.3984 8.19995 16.8724 8.67568 16.8724 9.26253L16.872 11.5974L16.9412 11.5975C17.4916 11.5975 17.9438 12.0189 17.9952 12.5577L18 12.6601V13.45H18.75V13.075C18.75 12.8909 18.8827 12.7377 19.0576 12.706L19.125 12.7H19.875C20.4598 12.7 20.9403 13.1461 20.9949 13.7166L21 13.825V16.075C21 16.6597 20.5538 17.1403 19.9833 17.1948L19.875 17.2H19.125C18.9409 17.2 18.7878 17.0673 18.756 16.8924L18.75 16.825L18.7493 16.45H18V16.1374C18 16.7242 17.5259 17.2 16.9412 17.2H9.87832C9.79315 17.2 9.71085 17.169 9.6466 17.1129L7.90235 15.5898L6.35294 15.5905C6.17968 15.5905 6.03557 15.4652 6.00569 15.3L6 15.2363V14.2H5.25075L5.25 14.575L5.24396 14.6424C5.21221 14.8173 5.05909 14.95 4.875 14.95H4.125L4.01665 14.9448C3.44617 14.8903 3 14.4097 3 13.825V11.575L3.00515 11.4666C3.05966 10.8961 3.54023 10.45 4.125 10.45H4.875L4.94241 10.456C5.11734 10.4877 5.25 10.6409 5.25 10.825V11.2H6V10.4918C6 10.3777 6.05486 10.2705 6.14736 10.2039L8.84181 8.26624C8.90176 8.22313 8.97365 8.19995 9.04739 8.19995H10.5V7.44995H10.0714C9.91363 7.44995 9.78239 7.31729 9.75518 7.14236L9.75 7.07495V6.32495C9.75 5.74018 10.1324 5.25961 10.6214 5.2051L10.7143 5.19995H13.2857ZM15.8136 8.90833H9.16024L6.70588 10.6729V14.8814L8.03571 14.8821C8.09959 14.8821 8.16186 14.8995 8.2161 14.9319L8.26743 14.9691L10.0108 16.4916H16.9412C17.1144 16.4916 17.2585 16.3663 17.2884 16.201L17.2941 16.1374V12.6601C17.2941 12.4644 17.1361 12.3059 16.9412 12.3059H16.5195C16.3246 12.3059 16.1666 12.1473 16.1666 11.9517V9.26253C16.1666 9.06691 16.0085 8.90833 15.8136 8.90833ZM19.875 13.45H19.5L19.4993 15.7H19.5V16.45H19.875C20.0361 16.45 20.1734 16.3484 20.2265 16.2058L20.244 16.1424L20.25 16.075V13.825C20.25 13.6409 20.1173 13.4877 19.9424 13.456L19.875 13.45ZM18.75 14.2H18V15.7H18.7493L18.75 14.2ZM13.875 11.2C14.0591 11.2 14.2122 11.3326 14.244 11.5075L14.25 11.575V14.575C14.25 14.7821 14.0821 14.95 13.875 14.95C13.6909 14.95 13.5378 14.8173 13.506 14.6424L13.5 14.575V11.575C13.5 11.3678 13.6679 11.2 13.875 11.2ZM4.5 11.2H4.125L4.05759 11.206C3.88266 11.2377 3.75 11.3909 3.75 11.575V13.825L3.75604 13.8924L3.77346 13.9558C3.82656 14.0984 3.96392 14.2 4.125 14.2H4.5V13.45H4.50075L4.5 11.2ZM10.875 10.45C11.0591 10.45 11.2122 10.5826 11.244 10.7575L11.25 10.825V13.825C11.25 14.0321 11.0821 14.2 10.875 14.2C10.6909 14.2 10.5378 14.0673 10.506 13.8924L10.5 13.825V10.825C10.5 10.6178 10.6679 10.45 10.875 10.45ZM6 11.95H5.25L5.25075 13.45H6V11.95ZM9.375 11.2C9.55909 11.2 9.71221 11.3326 9.74396 11.5075L9.75 11.575V13.075C9.75 13.2821 9.58211 13.45 9.375 13.45C9.19091 13.45 9.03779 13.3173 9.00604 13.1424L9 13.075V11.575C9 11.3678 9.16789 11.2 9.375 11.2ZM12.375 11.2C12.5591 11.2 12.7122 11.3326 12.744 11.5075L12.75 11.575V13.075C12.75 13.2821 12.5821 13.45 12.375 13.45C12.1909 13.45 12.0378 13.3173 12.006 13.1424L12 13.075V11.575C12 11.3678 12.1679 11.2 12.375 11.2ZM12.75 7.44995H11.25V8.19995H12.75V7.44995ZM13.2 5.94995H10.8C10.6527 5.94995 10.5302 6.08261 10.5048 6.25754L10.5 6.32495V6.69995H13.5V6.32495C13.5 6.16387 13.4187 6.02651 13.3047 5.97341L13.2539 5.95599L13.2 5.94995Z"/>',
    }}
  />
)

export const tags = ['power', 'criteria', 'automobile']