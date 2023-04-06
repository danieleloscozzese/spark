import { IconProps } from '../Types'

export const Trunk = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="M19.6322 5.19995C19.724 5.2 19.8125 5.23373 19.8803 5.29453C19.9481 5.35533 19.9902 5.43881 19.9985 5.52855C20.0068 5.6183 19.9805 5.70784 19.925 5.77959C19.8694 5.85133 19.7885 5.9001 19.6982 5.9163L19.6322 5.92219H15.8501C15.6101 5.92219 15.3771 5.99972 15.1861 6.14004L15.0941 6.21658L11.759 9.28611C11.4569 9.56444 11.0679 9.73456 10.655 9.76891L10.5 9.77578H7.64189C7.06687 9.77578 6.59486 10.2056 6.54186 10.7551L6.53686 10.8601V14.8943C6.53686 15.4585 6.97487 15.9207 7.53488 15.9737L7.64189 15.9786H9.04992V15.9472C9.04992 15.0847 9.39908 14.2575 10.0206 13.6477C10.6421 13.0378 11.4851 12.6952 12.364 12.6952C13.2429 12.6952 14.0859 13.0378 14.7074 13.6477C15.3289 14.2575 15.6781 15.0847 15.6781 15.9472L15.6761 15.9786H19.6312C19.723 15.9787 19.8115 16.0124 19.8793 16.0732C19.9471 16.134 19.9892 16.2175 19.9975 16.3072C20.0058 16.397 19.9795 16.4865 19.924 16.5583C19.8684 16.63 19.7875 16.6788 19.6972 16.695L19.6312 16.7018H15.5881C15.4151 17.4134 15.0028 18.0469 14.4177 18.5002C13.8326 18.9534 13.1089 19.2 12.3635 19.2C11.6181 19.2 10.8944 18.9534 10.3093 18.5002C9.72423 18.0469 9.31191 17.4134 9.13892 16.7018H7.64189C6.66486 16.7018 5.86684 15.956 5.80384 15.014L5.79984 14.8943V10.8601C5.79984 9.90139 6.55986 9.11831 7.51988 9.05648L7.64189 9.05256H10.362L7.97389 6.5571C7.79209 6.36745 7.54681 6.24832 7.28288 6.22149L7.16888 6.2156H5.36883C5.27691 6.2158 5.18824 6.18224 5.12027 6.12152C5.0523 6.0608 5.00994 5.97731 5.00154 5.88749C4.99314 5.79767 5.0193 5.70801 5.07487 5.63616C5.13045 5.56431 5.21141 5.51547 5.30183 5.49925L5.36783 5.49238H7.16988C7.63189 5.49238 8.0759 5.66313 8.41391 5.96733L8.51191 6.06252L11.165 8.83373L11.256 8.75915L14.5921 5.68864C14.8943 5.41073 15.2833 5.24098 15.6961 5.20682L15.8511 5.19995H19.6332H19.6322ZM12.365 13.4184C12.0222 13.4118 11.6816 13.4723 11.3629 13.5964C11.0443 13.7206 10.7541 13.9058 10.5093 14.1413C10.2645 14.3769 10.07 14.6579 9.93729 14.9681C9.80454 15.2783 9.73616 15.6113 9.73616 15.9477C9.73616 16.2841 9.80454 16.6172 9.93729 16.9273C10.07 17.2375 10.2645 17.5186 10.5093 17.7541C10.7541 17.9896 11.0443 18.1749 11.3629 18.299C11.6816 18.4231 12.0222 18.4837 12.365 18.477C13.0398 18.464 13.6825 18.1918 14.1551 17.7188C14.6276 17.2459 14.8923 16.61 14.8923 15.9477C14.8923 15.2854 14.6276 14.6495 14.1551 14.1766C13.6825 13.7036 13.0398 13.4314 12.365 13.4184ZM12.365 14.1406C12.8534 14.1406 13.3218 14.331 13.6672 14.6699C14.0125 15.0088 14.2065 15.4684 14.2065 15.9477C14.2065 16.427 14.0125 16.8866 13.6672 17.2255C13.3218 17.5644 12.8534 17.7548 12.365 17.7548C11.8766 17.7548 11.4082 17.5644 11.0628 17.2255C10.7175 16.8866 10.5235 16.427 10.5235 15.9477C10.5235 15.4684 10.7175 15.0088 11.0628 14.6699C11.4082 14.331 11.8766 14.1406 12.365 14.1406V14.1406ZM12.365 14.8639C12.0719 14.8639 11.7909 14.9781 11.5836 15.1815C11.3764 15.3848 11.26 15.6606 11.26 15.9482C11.26 16.2358 11.3764 16.5116 11.5836 16.7149C11.7909 16.9183 12.0719 17.0325 12.365 17.0325C12.6581 17.0325 12.9391 16.9183 13.1464 16.7149C13.3536 16.5116 13.47 16.2358 13.47 15.9482C13.47 15.6606 13.3536 15.3848 13.1464 15.1815C12.9391 14.9781 12.6581 14.8639 12.365 14.8639V14.8639Z"/>',
    }}
  />
)

export const tags = ['trunk', 'criteria', 'automobile']