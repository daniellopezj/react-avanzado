
import { useState } from 'react'

export function useLocalStorage(key, initalValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initalValue
    } catch (error) {
      return initalValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }
  return [storedValue, setLocalStorage]
}
