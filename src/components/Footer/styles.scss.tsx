// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  color: ${theme.colors.midgray};
  padding: ${theme.space[4]};
  width: 100%;

  a {
    svg {
      fill: ${theme.colors.white};
      &:hover {
        fill: #1da1f2;
      }
    }
  }

  .contact {
    display: inline-block;
    border: ${theme.border};
    border-color: ${theme.colors.midgray};
    color: ${theme.colors.midgray};
    padding: ${theme.space[2]} ${theme.space[4]};

    &:hover {
      background: ${theme.colors.white};
      border-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  }
`
