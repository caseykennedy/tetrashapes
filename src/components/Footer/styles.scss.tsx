// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: ${theme.space[4]};
  width: 100%;

  a {
    border: ${theme.border};
    padding: ${theme.space[2]} ${theme.space[4]};

    &:hover {
      background: ${theme.colors.gray};
      border-color: ${theme.colors.gray};
      color: ${theme.colors.black};
    }
  }
`
