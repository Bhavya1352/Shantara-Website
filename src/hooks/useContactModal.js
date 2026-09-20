import { useContext } from 'react'
import { ContactContext } from '../context/ContactContext'

export function useContactModal() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContactModal must be used within a ContactProvider')
  }
  return context
}
