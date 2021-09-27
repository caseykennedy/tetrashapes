// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${theme.colors.black};
  min-height: 100vh;
`

export const Main = styled.main`
  background: ${theme.colors.background};
  margin: 0 auto;
  position: relative;
  max-height: 100%;
  min-height: 33vh;
  max-width: ${theme.siteWidth};
  width: 100%;
`
