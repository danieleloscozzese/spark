import { IconProps } from '../Types'

export const IdentityOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="M13.9024 14.3276H17.8293C18.2764 14.3276 18.6341 13.9726 18.6341 13.5288 18.6341 13.085 18.2764 12.73 17.8293 12.73H13.9024C13.4553 12.73 13.0976 13.085 13.0976 13.5288 13.0976 13.9726 13.4553 14.3276 13.9024 14.3276ZM8.84553 13.2141C9.26829 13.2141 9.64228 13.0608 9.94309 12.7542 10.2439 12.4476 10.3984 12.0764 10.3984 11.6487 10.3984 11.2211 10.2439 10.8499 9.94309 10.5433 9.64228 10.2367 9.26829 10.0834 8.84553 10.0834 8.42276 10.0834 8.04878 10.2367 7.74797 10.5433 7.44715 10.8499 7.29268 11.2211 7.29268 11.6487 7.29268 12.0764 7.44715 12.4476 7.74797 12.7542 8.04878 13.0608 8.42276 13.2141 8.84553 13.2141ZM13.9024 11.6326H17.8293C18.2764 11.6326 18.6341 11.2776 18.6341 10.8338 18.6341 10.39 18.2764 10.035 17.8293 10.035H13.9024C13.4553 10.035 13.0976 10.39 13.0976 10.8338 13.0976 11.2776 13.4553 11.6326 13.9024 11.6326Z"/><path d="M21.4553 5.54868C21.0976 5.18558 20.6504 5 20.1382 5H3.86179C3.34959 5 2.91057 5.18558 2.54472 5.54868C2.18699 5.91178 2 6.36364 2 6.87197V18.128C2 18.6444 2.18699 19.0882 2.54472 19.4513C2.90244 19.8144 3.34959 20 3.86179 20H20.1382C20.6504 20 21.0894 19.8144 21.4553 19.4513C21.8211 19.0882 22 18.6444 22 18.128V6.88004C22 6.36364 21.813 5.91985 21.4553 5.55675V5.54868ZM3.77236 6.88004C3.77236 6.82356 3.78862 6.80742 3.78862 6.79935C3.78862 6.79935 3.80488 6.78322 3.86179 6.78322H20.1382C20.187 6.78322 20.2033 6.79935 20.2114 6.79935C20.2114 6.79935 20.2276 6.82356 20.2276 6.88004V18.1361C20.2276 18.1926 20.2114 18.2087 20.2114 18.2168C20.2114 18.2168 20.1951 18.2329 20.1382 18.2329H3.86179C3.81301 18.2329 3.79675 18.2168 3.78862 18.2168C3.78862 18.2168 3.77236 18.1926 3.77236 18.1361V6.88004Z"/><path d="M11.9593 15.4895C11.9593 15.1748 11.878 14.8763 11.7154 14.6181C11.5528 14.3599 11.3252 14.1662 11.0406 14.0452C10.6016 13.8677 10.2114 13.7466 9.86179 13.6821C9.52032 13.6175 9.17886 13.5853 8.84553 13.5853C8.4878 13.5853 8.12195 13.6175 7.7561 13.6902C7.39024 13.7628 7 13.8838 6.5935 14.0371C6.30894 14.1662 6.0813 14.3518 5.91057 14.61C5.73984 14.8682 5.65041 15.1587 5.65041 15.4814V15.9817H11.9675V15.4814L11.9593 15.4895Z"/>',
    }}
  />
)

export const tags = ['identity-outline', 'account']