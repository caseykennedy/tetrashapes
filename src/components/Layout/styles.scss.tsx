// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Wrapper = styled.div`
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.075) 25%,
      rgba(255, 255, 255, 0.075) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.075) 75%,
      rgba(255, 255, 255, 0.075) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.075) 25%,
      rgba(255, 255, 255, 0.075) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.075) 75%,
      rgba(255, 255, 255, 0.075) 76%,
      transparent 77%,
      transparent
    );
  height: 100%;
  background-size: ${theme.space[6]} ${theme.space[6]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 100vh;
`

export const Main = styled.main`
  /* background: ${theme.colors.background}; */
  margin: 0 auto;
  max-height: 100%;
  min-height: 33vh;
  max-width: ${theme.siteWidth};
  width: 100%;
`
