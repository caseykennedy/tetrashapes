// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  overflow: visible;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;

  a {
    color: ${theme.colors.white};
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: visible;
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    width: 100%;
  }
`

export const Menu = styled(Flex)`
  align-items: center;
  justify-content: flex-end;

  .symbol {
    margin-left: ${theme.space[5]};
  }
`

export const Logo = styled(Flex)`
  display: flex;
  align-items: center;

  .wordmark {
    font-family: ${theme.fonts.display};
    font-size: ${theme.fontSizes[2]};
    text-decoration: none;
    position: relative;
  }

  .symbol {
    margin-right: ${theme.space[3]};
    height: 50px;
    width: 50px;
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-end;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  position: relative;
  z-index: 9999;

  @media (min-width: 840px) {
    display: none;
  }
`
