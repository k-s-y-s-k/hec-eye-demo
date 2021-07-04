import React from 'react'
import ReactDOM from 'react-dom'
import { HTML_ID_MAP } from '~/constants';

const Modal: React.FC = ({
  children,
}) => {
  const elModal = document.getElementById(HTML_ID_MAP.MODAL);
  if (elModal == null) throw new Error(`HTML上に ${HTML_ID_MAP.MODAL} が付与されているDOMが存在しません。`);
  return (
    ReactDOM.createPortal(
      children,
      elModal
    )
  )
}

export default Modal