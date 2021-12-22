// HandshakeBadge:
// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import { Box, Flex, Text } from 'theme-ui'
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

import HandshakeLogo from '../SVG/Handshake'

// ___________________________________________________________________

type Props = { fill?: string }

const HandshakeBadge = ({ fill }: Props) => (
  <S.HandshakeBadge>
    <Text sx={{ fontSize: 2, whiteSpace: 'nowrap' }}>Decentralized on</Text>
    <HandshakeLogo fill={fill || 'black'} />
    <Text sx={{ fontSize: 2, fontWeight: 600 }}>Handshake</Text>
  </S.HandshakeBadge>
)

export default HandshakeBadge
