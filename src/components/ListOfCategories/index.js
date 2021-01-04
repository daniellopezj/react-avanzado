import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-server-daniellopez01.vercel.app/categories')
      .then(res => res.json()).then(response => {
        setCategories(response)
      })
  }, [])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [setShowFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => {
          return (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          )
        })
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
