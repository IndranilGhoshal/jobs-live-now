import React from 'react'
import PublicHeader from '../_component/PublicHeader'
import PublicFooter from '../_component/PublicFooter'
import '../../../public/css/public_style.css'

export default function PublicLayout({ children }) {
  return (
    <>
    <PublicHeader />
    {children}
    <PublicFooter />
    </>
  )
}
