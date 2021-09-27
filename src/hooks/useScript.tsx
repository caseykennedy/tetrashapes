// useScript hook

// ___________________________________________________________________

// Core
import { useState, useEffect, useRef } from 'react'

// ___________________________________________________________________

type Props = {
  url: string
}

const useScript = ({ url }: Props) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export default useScript
