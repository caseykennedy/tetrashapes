// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from 'theme-ui'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()
const mailTo = 'mailto:info@dotnft.com'

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Text>
        Building a new
        <br />
        internet together.
      </Text>

      <a href="mailto:info@tetrashapes.com">contact</a>
    </S.Footer>
  )
}

export default Footer
