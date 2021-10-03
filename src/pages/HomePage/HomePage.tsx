// HomePage:

// ___________________________________________________________________

import * as React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, FlyControls } from '@react-three/drei'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// components
import Section from '../../components/Section'
import TetraGeo from '../../components/TetraGeo'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <HomePageStyles>
      {/* <Section>
        <Heading as="h1" className="text--xs">
          A digital studio for
          <br />
          the decentralized web.
        </Heading>
      </Section> */}
      <Box className="canvas">
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          <TetraGeo
            flatShading={false}
            position={0}
            radius={2}
            speed={0.005}
            wireframe={false}
          />
          <TetraGeo
            flatShading={false}
            position={0}
            radius={5}
            detail={1}
            speed={0.003}
            wireframe={true}
          />
        </Canvas>
      </Box>
    </HomePageStyles>
  )
}

export default HomePage

// ___________________________________________________________________

const HomePageStyles = styled(Box)`
  .canvas {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;

    div {
      height: 75% !important;
    }
  }
`
