// HomePage:

// ___________________________________________________________________

import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, FlyControls } from '@react-three/drei'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text } from 'theme-ui'

// components
import Section from '../../components/Section'
import TetraGeo from '../../components/TetraGeo'

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      {/* <Section>
        <Heading as="h1" className="text--xs">
          A digital studio for
          <br />
          the decentralized web.
        </Heading>
      </Section> */}
      <Box className="canvas">
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
            radius={2}
            speed={0.017}
            wireframe={false}
          />
          <TetraGeo
            flatShading={false}
            position={0}
            radius={5}
            wireframe={true}
          />
          <OrbitControls />
          <FlyControls />
        </Canvas>
      </Box>
    </S.HomePage>
  )
}

export default HomePage
