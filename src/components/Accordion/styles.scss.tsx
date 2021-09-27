// Accordion Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex } from 'theme-ui'

// Begin Styles
// ___________________________________________________________________

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const AccordionContainer = styled.div`
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  margin-bottom: ${theme.space[3]};
  position: relative;
  width: 100%;

  /* &:first-child {
    border-top: none;
  } */
`

export const AccordionInner = styled.div<{bg?: string}>`
  /* background: ${p => p.bg}; */
  display: flex;
  flex-direction: column;

  .rotate {
    transform-origin: center;
    transform: rotate(180deg);
  }
`

export const AccordionToggle = styled(Flex)<{ bg?: string, colorActive?: string, color?: string}>`
  align-items: center;
  justify-content: space-between;
  /* background: ${theme.colors.white}; */
  color: ${p => p.color};
  cursor: pointer;

  outline: none;
  transition: background-color ${theme.transition.global};

  &:last-child {
    margin-bottom: 0;
  }
`

export const AccordionContent = styled(Box)`
  overflow: hidden;
  transition: max-height ${theme.transition.global};

  .content {
    flex-wrap: wrap;
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
  }
`

export const Carat = styled(Box)<{ chevronColor?: string, chevronWidth?: string }>`
  display: none;

  @media ${theme.mq.tablet} {
    display: block;
  }

  svg {
    fill: ${p => p.chevronColor};
    width: ${p => p.chevronWidth ? p.chevronWidth : theme.space[6]};
  }
`
