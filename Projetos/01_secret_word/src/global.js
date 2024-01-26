import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica;
        color: #fff;  
    }

    html {
        background: linear-gradient(180deg, rgba(9, 35, 175, 1) 0%, rgba(0, 0, 0, 1)100%);
        height: 100%;
    }
`;
