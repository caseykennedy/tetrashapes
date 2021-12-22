// Header
// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Theme + ui
import { Box, Flex, Heading, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
// import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header p={theme.gutter.axis}>
        <Flex className="header-inner">
          <Link to="/" className="logo" aria-label="dotNFT, back to home">
            <S.Logo onClick={() => setNavOpen(false)}>
              <Text className="wordmark" aria-label="dotNFT">
                tetra
              </Text>
            </S.Logo>
          </Link>

          {/* <S.Menu>
            <Navigation />

            <S.Toggle onClick={toggleMenu} aria-label="toggle menu">
              <HamburgerMenu
                isOpen={!isNavOpen ? false : true}
                menuClicked={toggleMenu}
                width={36}
                height={12}
                strokeWidth={2}
                rotate={0}
                color={theme.colors.black}
                borderRadius={0}
                animationDuration={0.333}
              />
            </S.Toggle>
          </S.Menu> */}
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
