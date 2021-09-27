// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// Karla Regular
import KarlaRegularEot from './fonts/Karla-Regular.eot'
import KarlaRegularOtf from './fonts/Karla-Regular.otf'
import KarlaRegularWoff from './fonts/Karla-Regular.woff'

// Karla Medium
import KarlaMediumEot from './fonts/Karla-Medium.eot'
import KarlaMediumOtf from './fonts/Karla-Medium.otf'
import KarlaMediumWoff from './fonts/Karla-Medium.woff'
import KarlaMediumWoff2 from './fonts/Karla-Medium.woff2'

// DM Mono Light
import DMMonoLightEot from './fonts/DMMono-Light.eot'
import DMMonoLightWoff2 from './fonts/DMMono-Light.woff2'
import DMMonoLightWoff from './fonts/DMMono-Light.woff'
import DMMonoLightOtf from './fonts/DMMono-Light.otf'

// DM Mono Regular
import DMMonoRegularEot from './fonts/DMMono-Regular.eot'
import DMMonoRegularWoff2 from './fonts/DMMono-Regular.woff2'
import DMMonoRegularWoff from './fonts/DMMono-Regular.woff'
import DMMonoRegularOtf from './fonts/DMMono-Regular.otf'

// DM Mono Medium
import DMMonoMediumEot from './fonts/DMMono-Medium.eot'
import DMMonoMediumWoff2 from './fonts/DMMono-Medium.woff2'
import DMMonoMediumWoff from './fonts/DMMono-Medium.woff'
import DMMonoMediumOtf from './fonts/DMMono-Medium.otf'

// ___________________________________________________________________

const Typography = css`
  /* Karla Regular */
  @font-face {
    font-family: 'Karla';
    src: url(${KarlaRegularEot});
    src: url(${KarlaRegularWoff}) format('woff'),
      url(${KarlaRegularOtf}) format('opentype'),
      url(${KarlaRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Karla Medium */
  @font-face {
    font-family: 'Karla';
    src: url(${KarlaMediumEot});
    src: url(${KarlaMediumWoff2}) format('woff2'),
      url(${KarlaMediumWoff}) format('woff'),
      url(${KarlaMediumOtf}) format('opentype'),
      url(${KarlaMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* DM Mono Light */
  @font-face {
    font-family: 'Saygon';
    src: url(${DMMonoLightEot});
    src: url(${DMMonoRegularWoff2}) format('woff2'),
      url(${DMMonoLightWoff}) format('woff'),
      url(${DMMonoLightOtf}) format('opentype'),
      url(${DMMonoLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* DM Mono Regular */
  @font-face {
    font-family: 'DMMono';
    src: url(${DMMonoRegularEot});
    src: url(${DMMonoRegularWoff2}) format('woff2'),
      url(${DMMonoRegularWoff}) format('woff'),
      url(${DMMonoRegularOtf}) format('opentype'),
      url(${DMMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* DM Mono Medium */
  @font-face {
    font-family: 'DMMono';
    src: url(${DMMonoMediumEot});
    src: url(${DMMonoMediumWoff2}) format('woff2'),
      url(${DMMonoMediumWoff}) format('woff'),
      url(${DMMonoMediumOtf}) format('opentype'),
      url(${DMMonoMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    color: ${theme.colors.text};

    font-size: ${theme.fontSizes[2]};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  mark {
    background-color: ${theme.colors.accent};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.headingLetterSpacing};
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: ${theme.fontSizes[7]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1);
    }

    @media ${theme.mq.desktop} {
      font-size: calc(${theme.fontSizes[7]} / 1);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.fontSizes[6]});
    margin: 0 0 ${theme.space[2]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[7]};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.fontSizes[5]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[6]};
    }
  }

  h3,
  .text--lg {
    font-size: calc(${theme.fontSizes[5]} / 1.15);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[5]} / 1.25);
    }

    @media ${theme.mq.desktop} {
      font-size: calc(${theme.fontSizes[5]});
    }
  }

  h4,
  .text--md {
    font-size: calc(${theme.fontSizes[3]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[4]});
    }
  }

  h5,
  .text--sm {
    font-size: calc(${theme.fontSizes[3]});
  }

  h6,
  .text--xs {
    font-size: ${theme.fontSizes[2]};
  }

  p,
  .text--base {
    font-size: ${theme.fontSizes[2]};

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline;

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }

    strong {
    }
  }

  strong {
    font-weight: 800;
  }

  sup {
    font-size: 70%;
    font-weight: 800;
  }

  .text--small {
    font-size: calc(${theme.fontSizes[0]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[1]});
    }
  }

  .text--mono {
    font-family: ${theme.fonts.mono};
    letter-spacing: -0.75px;
  }

  .t-underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
      column-count: 2;
    }
  }

  .text--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text--underline {
    text-decoration: underline;
  }

  .text--justify {
    @media ${theme.mq.tablet} {
      text-align: justify;
    }
  }

  a {
    color: inherit;
    position: relative;
    text-decoration: none;

    /* &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    } */

    &.text--link {
      font-weight: 600;
      transform: text-decoration ${theme.transition.global};

      &:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
      }
    }
  }

  mark {
    background-color: transparent;
    border: 2px solid red;
    color: inherit;
    padding: 0 calc(${theme.space[1]} / 1.5);
  }

  ul {
    margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    /* list-style-position: inside; */
    list-style-type: square;

    @media ${theme.mq.tablet} {
      margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    }

    li {
      font-size: ${theme.fontSizes[2]};
      margin: 0 0 ${theme.space[4]};

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: underline;
        color: ${theme.colors.primary};

        &:hover,
        &:focus {
          text-decoration: none;
          color: ${theme.colors.primary};
        }
      }

      strong {
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
