// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.07) 25%,
      rgba(255, 255, 255, 0.07) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.07) 75%,
      rgba(255, 255, 255, 0.07) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.07) 25%,
      rgba(255, 255, 255, 0.07) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.07) 75%,
      rgba(255, 255, 255, 0.07) 76%,
      transparent 77%,
      transparent
    );
  height: 100%;
  background-size: ${theme.space[7]} ${theme.space[7]};

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const Main = styled.main`
  /* background: ${theme.colors.background}; */
  margin: 0 auto;
  max-height: 100%;
  max-width: ${theme.siteWidth};
  width: 100%;
`
