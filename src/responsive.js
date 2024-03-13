import { css } from "styled-components"

export const mobile = (props) => {
    return css`
        @media (max-width: 675px){
      ${props}
    }
    `;
}
export const tablet = (props) => {
    return css`
        @media only screen and (max-width:800px){
      ${props}
    }
    `;
}

