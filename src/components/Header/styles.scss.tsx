// Header Styles:

// ___________________________________________________________________

import { Flex } from 'theme-ui'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Header = styled.header`
  padding: ${theme.space[4]};
  overflow: visible;
  width: 100%;
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
    
    svg {
      /* height: 50px; */
      width: 33px;
    }
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
