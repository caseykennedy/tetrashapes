import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>``

type Props = { fill?: string }

const Handshake = ({ fill }: Props) => (
  <SVG
    width="119"
    viewBox="0 0 119 105"
    initial="hidden"
    animate="visible"
    fill="none"
  >
    <path
      opacity="0.7"
      d="M61.0905 2L2 85.9649H117.03L61.0905 2Z"
      fill={theme.colors.midgray}
    />
    <g opacity="0.7">
      <path
        d="M78.8473 102.647L2 85.9649L61.0905 2L78.8473 102.647Z"
        fill="white"
      />
    </g>
    <path
      d="M61.0901 2L78.8469 102.647L117.03 85.9649"
      fill={theme.colors.midgray}
    />
    <path
      d="M61.0905 2L2 85.9649H117.03L61.0905 2Z"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 85.9646L78.8473 102.646"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M61.0901 2L78.8469 102.647L117.03 85.9649"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVG>
)

export default Handshake
