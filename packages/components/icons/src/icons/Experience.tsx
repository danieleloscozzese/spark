import { IconProps } from '../Types'

export const Experience = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.808 21.1938L13.755 21.1797C13.7289 21.1707 13.7041 21.1587 13.681 21.1443L11.982 20.1042L10.3194 21.1439C10.3128 21.1481 10.3089 21.1504 10.3049 21.1526L10.3194 21.1439C10.2604 21.1808 10.1954 21.1989 10.1311 21.2C10.1198 21.1999 10.1147 21.1998 10.1096 21.1996C10.0722 21.198 10.0355 21.1907 10.0004 21.178C9.98978 21.1743 9.97914 21.1698 9.96876 21.1649C9.95904 21.1603 9.94941 21.1552 9.94 21.1497C9.93218 21.1452 9.92452 21.1403 9.91705 21.1351C9.9069 21.1282 9.89702 21.1207 9.88749 21.1127C9.87766 21.1043 9.86814 21.0954 9.85908 21.086C9.85427 21.0811 9.8493 21.0757 9.84446 21.0701C9.83291 21.0563 9.82468 21.0454 9.81703 21.0341L9.80435 21.0139C9.79819 21.0034 9.79403 20.9956 9.79012 20.9876L9.80435 21.0139C9.76855 20.9531 9.75097 20.8861 9.74999 20.8198L9.75 16.9499L9.75604 16.8805C9.78779 16.7003 9.94091 16.5636 10.125 16.5636C10.3321 16.5636 10.5 16.7366 10.5 16.9499L10.4992 20.1274L11.7858 19.3241C11.8845 19.2625 12.004 19.2517 12.11 19.292L12.1717 19.3223L13.4993 20.1343L13.5 16.9499L13.506 16.8805C13.5378 16.7003 13.6909 16.5636 13.875 16.5636C14.0821 16.5636 14.25 16.7366 14.25 16.9499L14.25 20.8069C14.2508 20.8494 14.2447 20.8924 14.2314 20.9341C14.2159 20.9828 14.1913 21.0271 14.1597 21.065L14.1974 21.0108C14.1818 21.0379 14.1635 21.0623 14.1431 21.0839C14.1334 21.0939 14.1232 21.1036 14.1124 21.1127C14.1052 21.1189 14.0973 21.125 14.0892 21.1308C14.0801 21.1373 14.0709 21.1433 14.0614 21.1489C14.0482 21.1567 14.0345 21.1636 14.0205 21.1697C14.015 21.1722 14.0094 21.1744 14.0037 21.1766C13.9658 21.1907 13.9258 21.1987 13.8853 21.1998L13.875 21.1999C13.851 21.1999 13.8294 21.1978 13.808 21.1938ZM12 4.19995C15.3137 4.19995 18 6.96764 18 10.3818C18 13.7959 15.3137 16.5636 12 16.5636C8.68629 16.5636 6 13.7959 6 10.3818C6 6.96764 8.68629 4.19995 12 4.19995ZM12 4.97268C9.10051 4.97268 6.75 7.39441 6.75 10.3818C6.75 13.3691 9.10051 15.7909 12 15.7909C14.8995 15.7909 17.25 13.3691 17.25 10.3818C17.25 7.39441 14.8995 4.97268 12 4.97268ZM12.0142 6.51813C12.3285 6.51813 12.6102 6.72732 12.7221 7.04383L13.2459 8.77494H14.9874C15.3175 8.77256 15.611 9.0007 15.7129 9.33887C15.8149 9.67705 15.7018 10.0474 15.4334 10.2544L14.0813 11.3678L14.5839 13.1599C14.6888 13.4972 14.5767 13.8686 14.3078 14.075C14.0479 14.3022 13.6758 14.3022 13.4158 14.075L12.0142 13.0074L10.5983 14.075C10.4733 14.1754 10.3224 14.2314 10.1665 14.2352C9.92579 14.2284 9.70213 14.0999 9.56284 13.8883C9.42355 13.6767 9.38492 13.4068 9.45857 13.1599L9.98243 11.4288L8.56659 10.2925C8.29821 10.0855 8.18514 9.71518 8.28709 9.377C8.38903 9.03883 8.68252 8.81069 9.01258 8.81307H10.7045L11.3062 7.04383C11.4181 6.72732 11.6998 6.51813 12.0142 6.51813ZM11.9858 7.29086L11.4127 9.04847C11.3168 9.38091 11.0302 9.60801 10.7052 9.60907H9V9.71513L10.3373 10.8136C10.606 11.0186 10.718 11.3877 10.6132 11.7227L10.098 13.4116L10.1745 13.4727L11.5401 12.4045C11.8065 12.1997 12.1652 12.1997 12.4316 12.4045L13.7972 13.4727L14.2146 13.2909L13.8821 13.4045L13.3585 11.6848C13.2706 11.3612 13.3808 11.0132 13.6344 10.8136L15 9.75301V9.64695H13.2807C12.9557 9.64589 12.6691 9.41879 12.5731 9.08634L12.0354 7.32878C12.0289 7.3055 12.0085 7.2899 11.9858 7.29086Z"/>',
    }}
  />
)

export const tags = ['experience', 'criteria', 'job']