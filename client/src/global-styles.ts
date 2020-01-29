import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
    ${reset}
    * {
        box-sizing: border-box;
    }
    * {
       color: inherit;
       text-decoration: none; 
    }
    body    {
      margin: 0;
      padding: 20px 40px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }   
`;

export default GlobalStyles;
