// Accordion:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'

import { Text, Box } from 'theme-ui'
import Icon from '../Icons'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  active?: boolean
  children: React.ReactNode
  title: string
  color?: string
  chevronColor?: string
  chevronWidth?: string
  borderColor?: string
  borderTop?: boolean
  colorActive?: string
  bg?: string
  fontSize?: number | number[] | string
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
}

// ___________________________________________________________________

const Accordion: React.FC<Props> = ({
  active,
  bg,
  chevronColor,
  chevronWidth,
  children,
  color,
  colorActive,
  fontSize,
  pt,
  pb,
  pr,
  pl,
  title,
}) => {
  // Reference the accordion content height
  const refContent = useRef<HTMLDivElement>(null)

  let activeState
  let heightState
  let rotateState

  if (!active) {
    activeState = ''
    heightState = '0px'
    rotateState = 'accordion-icon'
  } else {
    activeState = 'active'
    heightState = '100%'
    rotateState = 'accordion-icon rotate'
  }

  const [setActive, setActiveState] = useState(activeState)
  const [setHeight, setHeightState] = useState(heightState)
  const [setRotate, setRotateState] = useState(rotateState)

  // Toggle classes / height
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    if (null !== refContent) {
      setHeightState(
        setActive === 'active'
          ? '0px'
          : `${refContent.current && refContent.current.scrollHeight}px`
      )
    }
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }
  return (
    <S.AccordionContainer>
      <S.AccordionInner>
        <S.AccordionToggle
          className={setActive}
          onClick={toggleAccordion}
          color={color}
          colorActive={colorActive}
          bg={setActive === 'active' ? bg : 'transparent'}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        >
          <Text className="title" sx={{ fontSize, pr: [0, 6] }}>
            {title}
          </Text>
          <S.Carat
            className={setRotate}
            chevronColor={chevronColor}
            chevronWidth={chevronWidth}
          >
            <Icon name="carat" color="black" />
          </S.Carat>
        </S.AccordionToggle>
        <S.AccordionContent
          bg={bg}
          ref={refContent}
          style={{ maxHeight: `${setHeight}` }}
        >
          {children}
        </S.AccordionContent>
      </S.AccordionInner>
    </S.AccordionContainer>
  )
}

export default Accordion

// ___________________________________________________________________

const defaultProps = {
  pt: theme.gutter.axis,
  pb: theme.gutter.axis,
  pr: theme.gutter.axis,
  pl: theme.gutter.axis,
  title: 'title',
  color: theme.colors.text,
  colorActive: theme.colors.text,
  fontSize: [3, 4],
  chevronColor: theme.colors.text,
  chevronWidth: theme.space[5],
  borderColor: theme.colors.text,
  borderTop: false,
}

Accordion.defaultProps = defaultProps
