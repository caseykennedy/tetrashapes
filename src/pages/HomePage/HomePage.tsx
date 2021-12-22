// HomePage:
// ___________________________________________________________________

import * as React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'

// Theme + ui
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// components
import TetraGeo from '../../components/TetraGeo'

// ___________________________________________________________________

const StyledHomePage = styled(Box)`
  .canvas {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* z-index: -1; */

    div {
      height: 80% !important;
    }
  }
`

const HomePage = () => (
  <StyledHomePage>
    <Box className="canvas">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <TetraGeo
          flatShading={false}
          position={[0, 1, 0]}
          radius={1}
          speed={0.01}
          wireframe={false}
        />
        <TetraGeo
          flatShading={false}
          position={[0, 1, 0]}
          radius={4}
          detail={0}
          speed={0.003}
          wireframe={true}
        />
      </Canvas>
    </Box>
  </StyledHomePage>
)

export default HomePage
