// Header

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, FlyControls } from '@react-three/drei'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text } from 'theme-ui'

// Components
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'
import TetraGeo from '../TetraGeo'

// ___________________________________________________________________

const SymbolCanvas = () => {
  return (
    <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow={true}
        position={[0, 10, 0]}
        intensity={1.5}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <TetraGeo
        flatShading={false}
        position={0}
        radius={5}
        speed={0.005}
        wireframe={true}
      />
    </Canvas>
  )
}

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header p={theme.gutter.axis}>
        <Flex className="header-inner">
          <Link to="/" className="logo" aria-label="dotNFT, back to home">
            <S.Logo onClick={() => setNavOpen(false)}>
              <Box className="symbol">
                <SymbolCanvas />
              </Box>
              <Text className="wordmark" aria-label="dotNFT">
                tetra
              </Text>
            </S.Logo>
          </Link>

          <S.Menu>
            {/* <Navigation /> */}

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
          </S.Menu>
        </Flex>
        <Heading as="h1" mt={5} className="text--xs">
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
