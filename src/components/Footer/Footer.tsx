// Footer:

// ___________________________________________________________________

import * as React from 'react'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// Components
import Icon from '../Icons'

// ___________________________________________________________________

const mailTo = 'mailto:taylor@tetrashapes.com'
const twitterHref = 'https://twitter.com/tetrashapes'

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Box sx={{ flex: 1 }}>
        <Box mb={4}>Building a new internet together.</Box>
        <a href={mailTo} className="contact">
          contact us
        </a>
      </Box>

      <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
        <a href={twitterHref} target="_blank" rel="nofollow  noopener">
          <Icon name="twitter" />
        </a>
      </Flex>
    </S.Footer>
  )
}

export default Footer
