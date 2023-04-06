import { IconProps } from '../Types'

export const Model = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8 5.19995C15.4627 5.19995 16 5.71802 16 6.35709V19.0428C16 19.6819 15.4627 20.2 14.8 20.2H8.31111C7.64837 20.2 7.11111 19.6819 7.11111 19.0428V6.35709C7.11111 5.71802 7.64837 5.19995 8.31111 5.19995H14.8ZM15.2593 17.95H7.85185V19.0428C7.85185 19.2629 8.0184 19.4455 8.23662 19.4799L8.31111 19.4857H14.8C15.0536 19.4857 15.2593 19.2874 15.2593 19.0428V17.95ZM15.2593 8.1992H7.85185V17.1992H15.2593V8.1992ZM11.5147 14.0835C11.755 14.0835 11.9499 14.2775 11.9499 14.5167C11.9499 14.756 11.755 14.95 11.5147 14.95C11.2757 14.9467 11.0827 14.7546 11.0794 14.5167C11.0794 14.2775 11.2743 14.0835 11.5147 14.0835ZM12.6254 10.1015C12.9077 10.3802 13.0568 10.7658 13.0349 11.161C13.0556 11.6677 12.8269 12.1527 12.4219 12.4606C12.1469 12.6475 11.966 12.9431 11.9254 13.2721C11.922 13.4786 11.7528 13.6442 11.5453 13.6442C11.4451 13.6442 11.349 13.6042 11.2787 13.5331C11.2084 13.462 11.1697 13.3657 11.1714 13.266C11.1819 12.7927 11.4187 12.3529 11.8089 12.0823C12.1102 11.88 12.2897 11.541 12.2871 11.1793C12.3184 10.97 12.2541 10.7578 12.1117 10.6007C11.9693 10.4436 11.7638 10.3582 11.5514 10.3678C11.2094 10.3656 10.9059 10.5859 10.8036 10.9108C10.7555 11.0741 10.6067 11.1877 10.4358 11.1915C10.2374 11.1882 10.0774 11.0289 10.0741 10.8315C10.0762 10.7709 10.0886 10.711 10.1109 10.6545C10.3387 10.0618 10.9204 9.6791 11.5576 9.70272C11.9544 9.67772 12.343 9.82287 12.6254 10.1015ZM6.37037 8.19995C6.55219 8.19995 6.70341 8.32335 6.73477 8.48608L6.74074 8.54879V10.8511C6.74074 11.0438 6.57492 11.2 6.37037 11.2C6.18855 11.2 6.03733 11.0766 6.00597 10.9138L6 10.8511V8.54879C6 8.35613 6.16582 8.19995 6.37037 8.19995ZM14.8 5.91424H8.31111C8.05747 5.91424 7.85185 6.11251 7.85185 6.35709V7.44995H15.2593V6.35709C15.2593 6.13697 15.0927 5.95435 14.8745 5.92003L14.8 5.91424Z"/>',
    }}
  />
)

export const tags = ['model', 'criteria', 'multimedia']