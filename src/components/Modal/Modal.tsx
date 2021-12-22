// Modal:
// ___________________________________________________________________

import React from 'react'
import ReactModal from 'react-responsive-modal'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
  open: boolean
  close: () => void
} & typeof defaultProps

const modalStyles = {
  overlay: {
    background: theme.colors.white,
  },
  modal: {
    background: theme.colors.white,
    boxShadow: 'none',
    margin: '0',
    padding: `0`,
    height: '100%',
    maxWidth: '100%',
    width: '100%',
  },
}

const Modal = ({ children, open, close }: ModalProps) => (
  <ReactModal
    animationDuration={100}
    open={open}
    onClose={close}
    styles={modalStyles}
    focusTrapped={false}
    center={true}
    showCloseIcon={false}
  >
    {children}
  </ReactModal>
)

export default Modal

// ___________________________________________________________________

const defaultProps = {}

Modal.defaultProps = defaultProps
