// SEO Component
// ___________________________________________________________________

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import Facebook from './facebook'
import Twitter from './twitter'

import settings from '../../../config'

// ___________________________________________________________________

type Props = {
  banner?: string | undefined
  price?: number
  productName?: string
  sku?: string
} & typeof defaultProps

type QueryProps = {
  site: {
    buildTime: string
  }
}

const defaultProps = {
  title: '',
  desc: '',
  pathname: '',
  node: {
    modifiedTime: '',
    birthTime: '',
  },
  article: false,
  product: false,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`

const SEO = ({
  banner,
  desc,
  title,
  price,
  product,
  productName,
  sku,
  pathname,
  node,
  article,
}: Props) => {
  const { site }: QueryProps = useStaticQuery(query)
  const { buildTime } = site

  const seo = {
    title: `${title}` || settings.siteTitle,
    description: desc || settings.siteDescription,
    image: banner || settings.bannerUrl,
    url: `${settings.siteUrl}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgProduct = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    brand: settings.ogSiteName,
    name: productName,
    image: seo.image,
    description: seo.description,
    review: '',
    sku: `${sku}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '5',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: `${price}`,
      priceValidUntil: '',
      url: seo.url,
      availability: 'http://schema.org/InStock',
    },
  }

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': !product ? 'WebPage' : 'Product',
    url: settings.siteUrl,
    headline: settings.siteHeadline,
    inLanguage: settings.siteLanguage,
    mainEntityOfPage: settings.siteUrl,
    description: settings.siteDescription,
    name: settings.siteTitle,
    author: {
      '@type': 'Person',
      name: settings.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: settings.author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: settings.author,
    },
    publisher: {
      '@type': 'Person',
      name: settings.author,
    },
    datePublished: '2019-03-10T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${settings.bannerUrl}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': settings.siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: settings.author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: settings.author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: settings.author,
      },
      publisher: {
        '@type': 'Organization',
        name: settings.author,
        logo: {
          '@type': 'ImageObject',
          url: `${settings.bannerUrl}`,
        },
      },
      datePublished: node ? node.birthTime : '2019-03-10T10:30:00+01:00',
      dateModified: node ? node.modifiedTime : '2019-03-10T10:30:00+01:00',
      description: seo.description,
      headline: seo.title,
      inLanguage: 'en',
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 5,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={settings.siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name={seo.title} content={seo.description} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {!product
              ? `${JSON.stringify(schemaOrgWebPage)}`
              : `${JSON.stringify(schemaOrgProduct)}`}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={settings.siteLanguage}
        name={settings.ogSiteName}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={settings.userTwitter}
      />
    </>
  )
}

export default SEO

SEO.defaultProps = defaultProps
