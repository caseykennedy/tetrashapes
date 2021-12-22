// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// ___________________________________________________________________

import React from 'react'

import IconStyle from './styles.scss'

// Icons
import Carat from './SVG/Carat'
import Chevron from './SVG/Chevron'
import Checkmark from './SVG/Checkmark'
import Document from './SVG/Document'
import Download from './SVG/Download'
import ExternalLink from './SVG/ExternalLink'
import Facebook from './SVG/Facebook'
import GridView from './SVG/GridView'
import Instagram from './SVG/Instagram'
import ListView from './SVG/ListView'
import NextArrow from './SVG/NextArrow'
import Pdf from './SVG/Pdf'
import Plus from './SVG/Plus'
import Pin from './SVG/Pin'
import Twitter from './SVG/Twitter'
import Youtube from './SVG/Youtube'

// ___________________________________________________________________

type Props = {
  name: string
  className?: string
  color?: string
  fas?: string
}

const Icon = ({ name, className, color, fas }: Props) => {
  switch (name) {
    case 'arrow':
      return (
        <IconStyle color={color} className={className}>
          <NextArrow />
        </IconStyle>
      )
    case 'carat':
      return (
        <IconStyle color={color} className={className}>
          <Carat />
        </IconStyle>
      )
    case 'chevron':
      return (
        <IconStyle color={color} className={className}>
          <Chevron />
        </IconStyle>
      )
    case 'checkmark':
      return (
        <IconStyle color={color} className={className}>
          <Checkmark />
        </IconStyle>
      )
    case 'document':
      return (
        <IconStyle color={color} className={className}>
          <Document />
        </IconStyle>
      )
    case 'download':
      return (
        <IconStyle color={color} className={className}>
          <Download />
        </IconStyle>
      )
    case 'external-link':
      return (
        <IconStyle color={color} className={className}>
          <ExternalLink />
        </IconStyle>
      )
    case 'facebook':
      return (
        <IconStyle color={color} className={className}>
          <Facebook />
        </IconStyle>
      )
    case 'gridView':
      return (
        <IconStyle color={color} className={className}>
          <GridView />
        </IconStyle>
      )
    case 'instagram':
      return (
        <IconStyle color={color} className={className}>
          <Instagram />
        </IconStyle>
      )
    case 'listView':
      return (
        <IconStyle color={color} className={className}>
          <ListView />
        </IconStyle>
      )
    case 'pdf':
      return (
        <IconStyle color={color} className={className}>
          <Pdf />
        </IconStyle>
      )
    case 'plus':
      return (
        <IconStyle color={color} className={className}>
          <Plus />
        </IconStyle>
      )
    case 'pin':
      return (
        <IconStyle color={color} className={className}>
          <Pin />
        </IconStyle>
      )
    case 'twitter':
      return (
        <IconStyle color={color} className={className}>
          <Twitter />
        </IconStyle>
      )
    case 'youtube':
      return (
        <IconStyle color={color} className={className}>
          <Youtube />
        </IconStyle>
      )
    default:
      return (
        <IconStyle color={color} className="ico">
          <i className={fas ? `fas fa-${name}` : `fas fab fa-${name}`} />
        </IconStyle>
      )
  }
}

export default Icon

// ___________________________________________________________________
