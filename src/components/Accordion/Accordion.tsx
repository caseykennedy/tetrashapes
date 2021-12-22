// Accordion:
// ___________________________________________________________________

import React, { useCallback, useEffect, useState, useRef } from 'react'

import { Heading } from 'theme-ui'
import Icon from '../Icons'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  active?: boolean
  children: React.ReactNode
  title: string
  color?: string
  caratColor?: string
  caratWidth?: string
  colorActive?: string
  bg?: string
  fontSize?: number | number[] | string
  fontWeight?: number | string
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
}

// ___________________________________________________________________

const Accordion = ({
  active,
  bg,
  caratColor,
  caratWidth,
  children,
  color,
  colorActive,
  fontSize,
  fontWeight,
  pt,
  pb,
  pr,
  pl,
  title,
}: Props) => {
  const refToggle = useRef<HTMLDivElement>(null)
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

  const toggleAccordion = useCallback(() => {
    setActiveState(setActive === '' ? 'active' : '')
    if (refContent !== null) {
      setHeightState(
        setActive === 'active'
          ? '0px'
          : `${refContent.current && refContent.current.scrollHeight}px`
      )
    }
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }, [setActive])

  useEffect(() => {
    const currentToggler = refToggle.current
    currentToggler?.addEventListener('click', toggleAccordion)
    return () => currentToggler?.removeEventListener('click', toggleAccordion)
  }, [toggleAccordion])

  return (
    <S.AccordionContainer>
      <S.AccordionInner>
        <S.AccordionToggle
          ref={refToggle}
          className={setActive}
          color={color}
          colorActive={colorActive}
          bg={setActive === 'active' ? bg : 'transparent'}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        >
          <Heading sx={{ fontSize, fontWeight, mb: 0, pr: [0, 6] }}>
            {title}
          </Heading>
          <S.Carat
            className={setRotate}
            caratColor={caratColor}
            caratWidth={caratWidth}
          >
            <Icon name="chevron" />
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
  pt: [4, 5, 5],
  pb: [4, 5, 5],
  pr: [4, 5, 5],
  pl: [4, 5, 5],
  title: 'title',
  color: theme.colors.text,
  colorActive: theme.colors.text,
  fontSize: [3, 4],
  caratColor: theme.colors.text,
  caratWidth: theme.space[4],
}

Accordion.defaultProps = defaultProps
