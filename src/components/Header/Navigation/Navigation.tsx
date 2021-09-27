// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Link
          to={item.link}
          activeClassName="active"
          partiallyActive={true}
          key={idx}
        >
          {item.name}
        </Link>
      ))}
      <Link to={`/search`} className="button">Pre-register</Link>
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'How it works',
    link: '/how-it-works',
  },
  {
    name: 'Why .nft?',
    link: '/why-nft',
  },
  {
    name: 'Policies',
    link: '/policies',
  },
  {
    name: 'FAQs',
    link: '/faq',
  },
]
