import { createGlobalStyle } from "styled-components";
    

export const GlobalStyle = createGlobalStyle `
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightColor: #68bac5;
        --medColor: #68bac5;;
        --darkColor: #0b2d50;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    html {
        height: 100%;
    }

    *{
        box-sizing: border-box;
        margin:0;
    }

    body {
        height: 100%;
        margin: 0;
        padding: 0 0 20px 0;

        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3{
            font-size: 1.5rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }

    .navbar-custom-color{
        background-color: var(--darkColor);
    }

    .navbar-toggler{
        border: 0px!important;
        outline:0;
    }
`