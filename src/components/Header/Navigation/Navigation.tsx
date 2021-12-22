// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

const Navigation = () => (
  <S.Nav>
    {/* {data.map((item, idx) => (
      <Link
        to={item.link}
        activeClassName="active"
        partiallyActive={true}
        key={idx}
      >
        {item.name}
      </Link>
    ))} */}
    <Link to="/search" className="button">
      Pre-register
    </Link>
  </S.Nav>
)

export default Navigation
