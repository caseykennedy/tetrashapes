// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled.footer`
  background: ${theme.colors.black};
  /* border-top: ${theme.border}; */
  border-color: ${theme.colors.darkgray};
  color: ${theme.colors.gray};
  padding-top: ${theme.space[4]};
  padding-bottom: ${theme.space[4]};
  width: 100%;

  .footer {
    &__inner {
      display: flex;
      flex-direction: column;
      box-sizing: content-box;
      margin: 0 auto;
      max-width: ${theme.maxWidth};

      .utilities {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media ${theme.mq.tablet} {
          flex-direction: row;
        }

        .callouts {
          flex: 1;
          flex-direction: column;

          @media ${theme.mq.tablet} {
            flex-direction: row;
          }
        }

        .handshake {
          flex: 1;
          justify-content: center;
          margin-top: ${theme.space[6]};

          @media ${theme.mq.tablet} {
            justify-content: flex-end;
            margin-top: 0;
          }
        }
      }

      .legal {
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-top: ${theme.space[5]};

        @media ${theme.mq.tablet} {
          margin-top: ${theme.space[7]};
        }
      }
    }
  }
`
