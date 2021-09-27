// Handshake Badge styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Flex } from 'theme-ui'

// ___________________________________________________________________

export const HandshakeBadge = styled(Flex)`
  display: flex;
  align-items: center;

  svg {
    margin: 0 ${theme.space[2]};
  }
`
