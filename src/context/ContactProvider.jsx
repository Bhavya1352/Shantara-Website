import { useState, useCallback } from 'react'
import { ContactContext } from './ContactContext'
import { stopLenis, startLenis } from '../hooks/useLenis'

export default function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [initialData, setInitialData] = useState({})

  const openContactModal = useCallback((data = {}) => {
    setInitialData(data)
    setIsOpen(true)
    stopLenis()
    document.body.style.overflow = 'hidden'
  }, [])

  const closeContactModal = useCallback(() => {
    setIsOpen(false)
    startLenis()
    document.body.style.overflow = ''
  }, [])

  return (
    <ContactContext.Provider
      value={{
        isOpen,
        initialData,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
