import { createGlobalStyle } from 'theme';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    border: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  body {
    height: 100vh;
  }

  body.modal-open {
    overflow: hidden;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    border: 0px solid transparent;
    cursor: pointer;

    &:focus {
      outline:0;
    }
  }

  :before, *:after {
    box-sizing: inherit;
  }

  svg {
    overflow: hidden;
  }
 
  #root {
    height: 100%;
  }

  .root--blurred {
    filter: blur(5px);
  }

  .modal--open {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
