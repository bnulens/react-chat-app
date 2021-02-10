import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Cabin', Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-font-smoothin: antialiased;
        -moz-osx-font-smoothing: grayscaled;
    }

    html {
        box-sizing: border-box;
        --color-white: ${(props) => props.theme.colors.white};
        --color-black: ${(props) => props.theme.colors.black};
        --color-darkgrey: ${(props) => props.theme.colors.darkgrey};
        --color-grey: ${(props) => props.theme.colors.grey};
        --color-silver: ${(props) => props.theme.colors.silver};
        --color-lightgrey: ${(props) => props.theme.colors.lightgrey};
        --color-blue: ${(props) => props.theme.colors.blue};
        --color-green: ${(props) => props.theme.colors.green};
        --color-danger: ${(props) => props.theme.colors.danger};
    }

    body {
        line-height: 1.6;
    }

    main {
        position: relative;
        display: block;
        margin: 0 auto;
    }

    a, input, textarea,button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
        color: var(--color-grey);
        :focus {
            outline: none;
        }
    } 

    ol, ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, 
    blockquote:after,
    q:before, 
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    @font-face {
        font-family: 'Cabin';
        font-weight: 900;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-Bold.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Cabin';
        font-weight: 900;
        font-style: italic;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-BoldItalic.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Cabin';
        font-weight: normal;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-Italic.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Cabin';
        font-weight: 500;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-Medium.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Cabin';
        font-weight: 500;
        font-style: italic;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-MediumItalic.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Cabin';
        font-weight: normal;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-Regular.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Cabin';
        font-weight: 700;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-SemiBold.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Cabin';
        font-weight: 700;
        font-style: italic;
        font-display: swap;
        src: local('Cabin'), url('../fonts/Cabin-SemiBoldItalic.ttf') format('truetype');
    }
`;
