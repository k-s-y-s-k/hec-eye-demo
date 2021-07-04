import React from 'react'
import ReactDOM from 'react-dom'
import { HTML_ID_MAP } from '~/constants';

const Toast: React.FC = ({
  children,
}) => {
  const elToast = document.getElementById(HTML_ID_MAP.TOAST);
  if (elToast == null) throw new Error(`HTML上に ${HTML_ID_MAP.TOAST} が付与されているDOMが存在しません。`);
  return (
    ReactDOM.createPortal(
      children,
      elToast
    )
  )
}

export default Toast