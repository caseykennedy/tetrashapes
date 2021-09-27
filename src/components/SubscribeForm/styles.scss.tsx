// Subscribe Form Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const SubscribeForm = styled(Box)`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media ${theme.mq.desktop} {
      flex-direction: row;
      flex-wrap: nowrap;
    }

    input[type='email'] {
      background: ${theme.colors.quaternary};
      border: ${theme.border};
      border-color: ${theme.colors.darkgray};
      border-radius: 0px;
      color: ${theme.colors.text};
      height: ${theme.inputHeight};
      outline: none;
      padding: ${theme.space[2]} ${theme.space[4]};

      font-size: ${theme.fontSizes[2]};
      line-height: normal;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${theme.inputHeight};
      padding: ${theme.space[2]} ${theme.space[6]};

      color: ${theme.colors.white};
      font-weight: 600;
      white-space: nowrap;

      background: ${darken(0.15, theme.colors.primary)};
      border: none;
      cursor: pointer;

      svg {
        fill: ${theme.colors.white};
        margin-left: ${theme.space[4]};
        width: 18px;
      }

      &:hover {
        background: ${theme.colors.primary};

        svg {
          fill: ${theme.colors.black};
        }
      }

      @media ${theme.mq.tablet} {
        min-width: ${theme.space[7]};
      }

      @media ${theme.mq.desktop} {
        min-width: ${theme.space[8]};
      }
    }
  }
`
