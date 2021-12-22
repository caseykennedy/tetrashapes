// Theme / Design system:

type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  initialColorModeName?: string
  useColorSchemeMediaQuery?: boolean
  useBodyStyles?: boolean
  useRootStyles?: boolean
  useLocalStorage?: boolean
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: {
    [key: string]: string | number | number[]
  }
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  fontWeights: {
    [key: string]: number
  }
  buttons: {
    [key: string]: {
      [key: string]: unknown
    }
  }
  maxWidth: string
  siteWidth: string
  grid: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  borderRadius: string
  shadow: string
  root: {
    mouseX: string
    mouseY: string
    font: {
      [key: string]: string
    }
    space: {
      [key: string]: string
    }
  }
}

// Theme
// ___________________________________________________________________

const breakpoints: string[] = ['768px', '1025px']
const border = '1px solid #898989'

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`,
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    text: '#FFFFFF',
    background: '#000000',

    primary: '#FFFFFF',
    black: '#000000',
    white: '#ffffff',

    gray: '#EEEEEE',
    midgray: '#898989',
    darkgray: '#2D2D2D',
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0', // 0
    'var(--space-xxs)', // 1
    'var(--space-xs)', // 2
    'var(--space-sm)', // 3
    'var(--space-md)', // 4
    'var(--space-lg)', // 5
    'var(--space-xl)', // 6
    'var(--space-xxl)', // 7
    '7rem', // 8
    '10rem', // 9
    '12rem', // 10
    '14rem', // 11
    '16rem', // 12
    '18rem', // 13
  ],

  // Gutter
  // ___________________________________________________________________

  gutter: {
    mobile: 4,
    tablet: 5,
    desktop: 5,
    vertical: [4],
    axis: [4],
  },

  // Constants
  // ___________________________________________________________________

  maxWidth: '100%',
  siteWidth: '100%',
  border,
  borderRadius: '2px',
  shadow: '0px 2px 1px rgba(0, 0, 0, 0.05)',

  grid: {
    gap: '0.5rem',
  },

  transition: {
    all: 'all 0.11s ease-in-out 0s',
    global: '0.11s ease-in-out 0s',
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)',
    },
  },

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"DMMono", Liberation Mono, Menlo, Courier, monospace`,
    heading: `"DMMono", Liberation Mono, Menlo, Courier, monospace`,
    sans: `"Karla", Arial, Liberation Mono, Menlo, Courier, monospace`,
    mono: `"DMMono", Consolas, Liberation Mono, Menlo, Courier, monospace`,
  },

  fontSizes: [
    'var(--text-xs)', // 0
    'var(--text-sm)', // 1
    'var(--text-base-size)', // 2
    'var(--text-md)', // 3
    'var(--text-lg)', // 4
    'var(--text-xl)', // 5
    'var(--text-xxl)', // 6
    'var(--text-xxxl)', // 7
  ],

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700,
  },

  // Button
  // ___________________________________________________________________

  buttons: {
    primary: {
      bg: 'transparent',
      color: 'midgray',
      border: `${border}`,
      borderColor: 'midgray',
      borderRadius: 0,
      cursor: 'pointer',
      fontSize: 1,
      py: 2,
      px: 4,
      '&:hover': {
        bg: 'midgray',
      },
    },
  },

  // Root
  // ___________________________________________________________________

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',

      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',

      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)',

      // Letter spacing
      headingLetterSpacing: 'var(--heading-letter-spacing)',
      baseLetterSpacing: 'var(--body-letter-spacing)',
    },
    space: {
      xxs: 'var(--space-xxs)',
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      xxl: 'var(--space-xxl)',
    },
  },
}

export default theme
