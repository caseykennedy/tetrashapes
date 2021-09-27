// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: none;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media (min-width: 840px) {
    display: flex;
  }

  a {
    color: ${theme.colors.text};
    text-decoration: none;
    margin-left: ${theme.space[5]};

    &.active,
    &:hover {
      color: ${theme.colors.primary};
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.space[3]} ${theme.space[4]};

    &:hover {
      background: ${darken(0.15, theme.colors.primary)};
      color: ${theme.colors.white};
    }
  }
`
