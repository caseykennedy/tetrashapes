// Header
// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Theme + ui
import { Flex, Heading, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import MobileNav from './MobileNav'
import Modal from '../Modal'
import Logo from '../SVG/Logo'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  return (
    <>
      <S.Header>
        <Flex className="header-inner">
          <Link to="/" className="logo" aria-label="dotNFT, back to home">
            <S.Logo onClick={() => setNavOpen(false)}>
              <div className="symbol">
                <Logo />
              </div>
              <Text className="wordmark" aria-label="dotNFT">
                tetra
              </Text>
            </S.Logo>
          </Link>
        </Flex>

        <Heading as="h1" mt={4} className="text--xs">
          A digital studio for
          <br />
          the decentralized web.
        </Heading>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
