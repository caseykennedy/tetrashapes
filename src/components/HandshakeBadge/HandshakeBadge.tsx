// HandshakeBadge:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from 'theme-ui'

import HandshakeLogo from '../SVG/Handshake'

// ___________________________________________________________________

const HandshakeBadge: React.FC<{ fill?: string }> = ({ fill }) => {
  return (
    <S.HandshakeBadge>
      <Text sx={{ fontSize: 2, whiteSpace: 'nowrap' }}>Decentralized on</Text>
      <HandshakeLogo fill={fill ? fill : 'black'} />
      <Text sx={{ fontSize: 2, fontWeight: 600 }}>Handshake</Text>
    </S.HandshakeBadge>
  )
}

export default HandshakeBadge
