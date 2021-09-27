// Subscribe Form Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Text, Input } from 'theme-ui'

// ___________________________________________________________________

const SubscribeForm = () => {
  return (
    <S.SubscribeForm>
      <Text as="p" mb={3}>
        Keep up with <strong>.nft</strong>
      </Text>
      <form
        name="dotNFT Subscribe"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="dotNFT Subscribe" />

        <label htmlFor="email" style={{ display: 'none' }}>
          Email address:
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          required={true}
          className="form-control"
        />

        <button type="submit" value="Submit form">
          Sign up
        </button>
      </form>
    </S.SubscribeForm>
  )
}

export default SubscribeForm
